import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useEffect, useState } from "react";

import Ionicons from "@expo/vector-icons/Ionicons";
import colours from "@colours";
import SearchTabBar from "components/SearchTabBar";
import SearchTile from "components/SearchTile";
import data from "@data";

export default function SearchScreen() {
  const [tab, setTab] = useState("All");
  const [locations, setlocations] = useState(data.locations);
  const [search, setSearch] = useState("");

  // Search bar and categories
  useEffect(() => {
    if (tab === "All") {
      setlocations(
        data.locations.filter((location) =>
          location.name.toLowerCase().includes(search.toLowerCase())
        )
      );
    } else if (tab === "Study") {
      setlocations(
        data.locations.filter(
          (location) =>
            location.name.toLowerCase().includes(search.toLowerCase()) &&
            location.categories.some((category) =>
              category.toLowerCase().includes("study")
            )
        )
      );
    } else if (tab === "Eat") {
      setlocations(
        data.locations.filter(
          (location) =>
            location.name.toLowerCase().includes(search.toLowerCase()) &&
            location.categories.some(
              (category) =>
                category.toLowerCase().includes("food") ||
                category.toLowerCase().includes("coffee")
            )
        )
      );
    } else if (tab === "Relax") {
      setlocations(
        data.locations.filter(
          (location) =>
            location.name.toLowerCase().includes(search.toLowerCase()) &&
            location.categories.some((category) =>
              category.toLowerCase().includes("greenary")
            )
        )
      );
    }
  }, [tab, search]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <SearchTabBar tab={tab} setTab={setTab} />
        <View style={searchPage.searchBar}>
          <Ionicons name="search" size="20" margin="3" />
          <TextInput
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="Search all locations"
            style={searchPage.input}
          ></TextInput>
        </View>
        <ScrollView
          style={{ width: "82%" }}
          showsVerticalScrollIndicator={false}
        >
          {locations.length === 0 ? (
            <Text style={searchPage.noLocationsText}>No locations found</Text>
          ) : (
            locations.map(
              ({ id, name, address, reviews, status, images }, idx) => (
                <SearchTile
                  key={idx}
                  locationId={id}
                  name={name}
                  address={address}
                  rating={
                    reviews.reduce((sum, review) => sum + review.rating, 0) /
                    reviews.length
                  }
                  status={status}
                  image={images[0]}
                  numReviews={reviews.length}
                />
              )
            )
          )}
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}
const searchPage = StyleSheet.create({
  searchBar: {
    padding: 10,
    flexDirection: "row",
    width: "82%",
    backgroundColor: colours.white,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "25",
    marginBottom: "15",
  },
  input: {
    width: "100%",
    fontSize: 16,
    marginLeft: 10,
  },
  noLocationsText: {
    fontSize: 20,
    color: colours.darkGrey,
    textAlign: "center",
    marginVertical: 20,
  },
});
