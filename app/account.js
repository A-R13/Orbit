import dataHandler from "@dataHandler";
import { Text, View, Pressable } from "react-native";

export default function AccountScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
