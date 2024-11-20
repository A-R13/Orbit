import { View, Text, Pressable, StyleSheet } from "react-native";

import styles from "@styles";
import colours from "@colours";

export default function SearchTabBar({ tab, setTab, setSearch }) {
  return (
    <View style={searchTabBar.locationTabBar}>
      <SearchTab
        tabName={"All"}
        tab={tab}
        setTab={setTab}
        setSearch={setSearch}
      />
      <SearchTab
        tabName={"Study"}
        tab={tab}
        setTab={setTab}
        setSearch={setSearch}
      />
      <SearchTab
        tabName={"Food"}
        tab={tab}
        setTab={setTab}
        setSearch={setSearch}
      />
      <SearchTab
        tabName={"Coffee"}
        tab={tab}
        setTab={setTab}
        setSearch={setSearch}
      />
      <SearchTab
        tabName={"Greenery"}
        tab={tab}
        setTab={setTab}
        setSearch={setSearch}
      />
    </View>
  );
}

// Select and switch to appropriate tab
function SearchTab({ tabName, tab, setTab, setSearch }) {
  const isSelected = tab == tabName;
  return (
    <Pressable
      style={[searchTabBar.locationTab, isSelected && searchTabBar.selectedTab]}
      onPress={() => {
        setTab(tabName);
        setSearch("");
      }}
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
    width: "85%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 80,
  },
});
