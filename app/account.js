import dataHandler from "@dataHandler";
import { Link } from "expo-router";
import { Text, View, Pressable, StyleSheet } from "react-native";

export default function AccountScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Link href="landing" style={account.logOut}>
        Log Out
      </Link>
      <Text>Account Screen</Text>
      <Pressable onPress={dataHandler.saveData}>
        <Text>Save data</Text>
      </Pressable>
      <Pressable onPress={dataHandler.clearAll}>
        <Text>Clear data</Text>
      </Pressable>
    </View>
  );
}

const account = StyleSheet.create({
  logOut: {
    position: "absolute",
    top: 64,
    right: 32,
    height: 30,
    width: 90,
    backgroundColor: colours.purple,
    color: colours.white,
    paddingTop: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    ...styles.smallText,
  },
});
