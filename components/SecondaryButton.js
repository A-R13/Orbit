import { Pressable, Text, StyleSheet } from "react-native";

import styles from "@styles";
import colours from "@colours";

export default function SecondaryButton({ text, onPress }) {
  return (
    <Pressable style={secondaryButton.secondaryButton} onPress={onPress}>
      <Text style={[styles.text, { color: colours.purple }]}>{text}</Text>
    </Pressable>
  );
}

const secondaryButton = StyleSheet.create({
  secondaryButton: {
    height: 60,
    width: 240,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.white,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: colours.purple,
  },
});
