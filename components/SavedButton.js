import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import colours from "@colours";
import dataHandler from "@dataHandler";
import data from "@data";
export default function SavedButton({ locationId, bookmark, setBookmark }) {
  function handleToggle({ locationId, bookmark }) {
    const check = !bookmark;
    const userId = data.currentUserId;
    if (check) {
      dataHandler.addBookmark(userId, locationId);
    } else {
      dataHandler.removeBookmark(userId, locationId);
    }
  }

  return (
    <Pressable
      style={savedButton.savedButton}
      onPress={() => {
        handleToggle({ locationId, bookmark });
        setBookmark(!bookmark);
      }}
    >
      <Ionicons
        name={bookmark ? "bookmark" : "bookmark-outline"} // Use different icon for bookmarked state
        size={24}
        color={bookmark ? colours.purple : colours.darkGrey} // Change color dynamically
      />
    </Pressable>
  );
}

const savedButton = StyleSheet.create({
  savedButton: {
    height: 32,
    width: 32,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.white,
    borderRadius: 16,
  },
});
