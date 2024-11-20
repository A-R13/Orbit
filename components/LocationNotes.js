import { useState } from "react";
import { Text, View, ScrollView, StyleSheet, Pressable } from "react-native";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";

import styles from "@styles";
import colours from "@colours";
import data from "@data";
import dataHandler from "@dataHandler";

export default function LocationNotes({ location }) {
  const [rerender, setRerender] = useState(0);

  // Handle upvote/downvote
  const handleVote = (noteIdx, type) => {
    const updatedNotes = [...location.communityNotes];
    const viewerId = data.currentUserId;

    // Get the specific note by index
    const note = updatedNotes[noteIdx];

    if (type === "upvote") {
      if (note.upvotes.includes(viewerId)) {
        // Remove upvote
        note.upvotes = note.upvotes.filter((id) => id !== viewerId);
      } else {
        // Add upvote and remove from downvotes
        note.upvotes.push(viewerId);
        note.downvotes = note.downvotes.filter((id) => id !== viewerId);
      }
    } else if (type === "downvote") {
      if (note.downvotes.includes(viewerId)) {
        // Remove downvote
        note.downvotes = note.downvotes.filter((id) => id !== viewerId);
      } else {
        // Add downvote and remove from upvotes
        note.downvotes.push(viewerId);
        note.upvotes = note.upvotes.filter((id) => id !== viewerId);
      }
    }
    setRerender((prev) => prev + 1);
    dataHandler.updateCommunityNotes(location.id, updatedNotes);
  };

  return (
    <ScrollView
      contentContainerStyle={locationNotes.container}
      style={locationNotes.locationNotes}
      showsVerticalScrollIndicator={false}
    >
      <Text
        style={[styles.smallText, { textAlign: "center", fontStyle: "italic" }]}
      >
        Provide additional context and information
      </Text>
      {location.communityNotes.map(
        ({ userId, text, upvotes, downvotes }, idx) => (
          <View style={locationNotes.note} key={idx}>
            <Text
              style={[styles.smallText, { fontWeight: "bold" }]}
              numberOfLines={1}
            >
              {dataHandler.getUser(userId).username}
            </Text>
            <Text style={styles.smallText}>{text}</Text>
            <View style={locationNotes.row}>
              <Pressable onPress={() => handleVote(idx, "upvote")}>
                <FontAwesome6
                  name="up-long"
                  size={20}
                  color={
                    upvotes.includes(data.currentUserId)
                      ? colours.purple
                      : colours.darkGrey
                  }
                />
              </Pressable>
              <Text
                style={[styles.smallText, { fontWeight: "bold" }]}
                numberOfLines={1}
              >
                {upvotes.length - downvotes.length}
              </Text>
              <Pressable onPress={() => handleVote(idx, "downvote")}>
                <FontAwesome6
                  name="down-long"
                  size={20}
                  color={
                    downvotes.includes(data.currentUserId)
                      ? colours.purple
                      : colours.darkGrey
                  }
                />
              </Pressable>
            </View>
          </View>
        )
      )}
    </ScrollView>
  );
}

const locationNotes = StyleSheet.create({
  locationNotes: {
    width: "100%",
  },
  container: {
    rowGap: 16,
  },
  note: {
    width: "100%",
    backgroundColor: colours.white,
    borderRadius: 8,
    padding: 16,
    rowGap: 4,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    columnGap: 8,
  },
});
