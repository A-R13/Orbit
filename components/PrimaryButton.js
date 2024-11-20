import { Pressable, Text, StyleSheet } from "react-native";

import styles from "@styles";
import colours from "@colours";

export default function PrimaryButton({ text, onPress }) {
  return (
    <Pressable style={primaryButton.primaryButton} onPress={onPress}>
      <Text style={[styles.text, { color: colours.white }]}>{text}</Text>
    </Pressable>
  );
}

const primaryButton = StyleSheet.create({
  primaryButton: {
    height: 60,
    width: 240,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.purple,
    borderRadius: 30,
  },
});
