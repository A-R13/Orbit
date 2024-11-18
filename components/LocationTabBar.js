import { View, Text, Pressable, StyleSheet } from "react-native";

import styles from "@styles";
import colours from "@colours";

export default function LocationTabBar({ tab, setTab }) {
  return (
    <View style={locationTabBar.locationTabBar}>
      <LocationTab tabName={"Overview"} tab={tab} setTab={setTab} />
      <LocationTab tabName={"Reviews"} tab={tab} setTab={setTab} />
      <LocationTab tabName={"Notes"} tab={tab} setTab={setTab} />
    </View>
  );
}

function LocationTab({ tabName, tab, setTab }) {
  const isSelected = tab == tabName;
  return (
    <Pressable
      style={[
        locationTabBar.locationTab,
        isSelected && locationTabBar.selectedTab,
      ]}
      onPress={() => setTab(tabName)}
    >
      <Text
        style={[
          styles.smallText,
          {
            fontWeight: "bold",
            color: isSelected ? colours.purple : colours.darkGrey,
          },
        ]}
      >
        {tabName}
      </Text>
    </Pressable>
  );
}

const locationTabBar = StyleSheet.create({
  locationTab: {
    height: 24,
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "rgba(0, 0, 0, 0)",
  },
  selectedTab: {
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
