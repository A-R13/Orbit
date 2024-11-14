import { View, Text, Pressable, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import styles from "@styles";
import colours from "@colours";

export default function LocationTabBar() {
  return (
    <View style={locationTabBar.locationTabBar}>
      <LocationTab tabName={"Overview"} />
      <LocationTab tabName={"Review"} />
      <LocationTab tabName={"Notes"} />
    </View>
  );
}

function LocationTab({ tabName }) {
  return (
    <View style={locationTabBar.locationTab}>
      <Text
        style={[
          styles.smallText,
          { fontWeight: "bold", color: colours.purple },
        ]}
      >
        {tabName}
      </Text>
    </View>
  );
}

const locationTabBar = StyleSheet.create({
  locationTab: {
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: colours.purple,
  },
  locationTabBar: {
    height: 24,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 16,
  },
});
