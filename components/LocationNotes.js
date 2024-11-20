import { Text, View, ScrollView, StyleSheet } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";

import styles from "@styles";
import colours from "@colours";
import dataHandler from "@dataHandler";

export default function LocationNotes({ location }) {
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
    alignItems: "center",
    columnGap: 4,
  },
});
