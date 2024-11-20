import {
  Text,
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { useEffect, useState, useCallback } from "react";
import { useFocusEffect, useLocalSearchParams } from "expo-router";

import Ionicons from "@expo/vector-icons/Ionicons";
import colours from "@colours";
import SearchTabBar from "components/SearchTabBar";
import SearchTile from "components/SearchTile";
import dataHandler from "@dataHandler";
import data from "@data";

export default function SearchScreen() {
  const [tab, setTab] = useState("");
  const [locations, setlocations] = useState(data.locations);
  const [search, setSearch] = useState("");
  const { category, date } = useLocalSearchParams();
  const [bookmarks, setBookmarks] = useState([]);

  useFocusEffect(
    useCallback(() => {
      // This will run every time the screen is focused
      const userBookmarks = dataHandler.getUser(data.currentUserId).bookmarks;
      setBookmarks(userBookmarks);
    }, [tab]) // Trigger the effect every time 'search' changes or screen focuses
  );

  useEffect(() => {
    setSearch("");
    if (category === "Study") {
      setTab("Study");
    } else if (category === "Food") {
      setTab("Food");
    } else if (category === "Coffee") {
      setTab("Coffee");
    } else if (category === "Greenery") {
      setTab("Greenery");
    } else if (category === "All") {
      setTab("All");
    }
  }, [date]);

  // Search bar and categories filter
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
    } else if (tab === "Food") {
      setlocations(
        data.locations.filter(
          (location) =>
            location.name.toLowerCase().includes(search.toLowerCase()) &&
            location.categories.some((category) =>
              category.toLowerCase().includes("food")
            )
        )
      );
    } else if (tab === "Coffee") {
      setlocations(
        data.locations.filter(
          (location) =>
            location.name.toLowerCase().includes(search.toLowerCase()) &&
            location.categories.some((category) =>
              category.toLowerCase().includes("coffee")
            )
        )
      );
    } else if (tab === "Greenery") {
      setlocations(
        data.locations.filter(
          (location) =>
            location.name.toLowerCase().includes(search.toLowerCase()) &&
            location.categories.some((category) =>
              category.toLowerCase().includes("greenery")
            )
        )
      );
    }
  }, [tab, search]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <SearchTabBar tab={tab} setTab={setTab} setSearch={setSearch} />
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
                  bookmarks={bookmarks}
                  setBookmarks={setBookmarks}
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
