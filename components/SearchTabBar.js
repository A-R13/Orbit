import { View, Text, Pressable, StyleSheet } from "react-native";

import styles from "@styles";
import colours from "@colours";

export default function SearchTabBar({ tab, setTab }) {
  return (
    <View style={searchTabBar.locationTabBar}>
      <SearchTab tabName={"All"} tab={tab} setTab={setTab} />
      <SearchTab tabName={"Study"} tab={tab} setTab={setTab} />
      <SearchTab tabName={"Eat"} tab={tab} setTab={setTab} />
      <SearchTab tabName={"Relax"} tab={tab} setTab={setTab} />
    </View>
  );
}

function SearchTab({ tabName, tab, setTab }) {
  const isSelected = tab == tabName;
  return (
    <Pressable
      style={[searchTabBar.locationTab, isSelected && searchTabBar.selectedTab]}
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

const searchTabBar = StyleSheet.create({
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
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 80,
  },
});
