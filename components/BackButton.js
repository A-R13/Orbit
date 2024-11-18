import { Pressable, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import styles from "@styles";
import colours from "@colours";

export default function BackButton() {
  const router = useRouter();

  return (
    <Pressable style={backButton.backButton} onPress={() => router.back()}>
      <FontAwesome5 name="chevron-left" size={25} color={colours.darkGrey} />
    </Pressable>
  );
}

const backButton = StyleSheet.create({
  backButton: {
    height: 50,
    width: 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colours.grey,
    borderRadius: 25,
    ...styles.dropShadow,
  },
});
