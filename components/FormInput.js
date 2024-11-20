import React from "react";
import { StyleSheet, TextInput } from "react-native";

export default function FormInput({
  title,
  text,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <TextInput
      style={formInput.formInput}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      value={text}
      placeholder={title}
    />
  );
}

const formInput = StyleSheet.create({
  formInput: {
    height: 60,
    width: 320,
    backgroundColor: colours.grey,
    color: colours.darkGrey,
    paddingHorizontal: 16,
    borderRadius: 8,
    ...styles.text,
  },
});
