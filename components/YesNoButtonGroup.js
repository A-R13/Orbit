import { View, Text, Pressable, StyleSheet } from "react-native";

import styles from "@styles";
import colours from "@colours";

export default function YesNoButtonGroup({ onYes, onNo }) {
  return (
    <View style={buttonGroup.container}>
      <Pressable style={[buttonGroup.button, buttonGroup.left]} onPress={onYes}>
        <Text style={[styles.smallText, { color: colours.purple }]}>Yes</Text>
      </Pressable>
      <Pressable style={[buttonGroup.button, buttonGroup.right]} onPress={onNo}>
        <Text style={[styles.smallText, { color: colours.purple }]}>No</Text>
      </Pressable>
    </View>
  );
}

const buttonGroup = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.white,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  left: {
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  right: {
    marginLeft: 2,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
