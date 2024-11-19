import { Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import colours from "@colours";

export default function SavedButton() {
  return (
    <Pressable
      style={savedButton.savedButton}
      onPress={() => {
        /* Do something */
      }}
    >
      <Ionicons name="bookmark-outline" size={24} color={colours.darkGrey} />
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
