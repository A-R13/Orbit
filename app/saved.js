import { useState, useEffect, useCallback } from "react";
import { useFocusEffect } from "expo-router";

import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import dataHandler from "@dataHandler";
import data from "@data";
import SearchTile from "components/SearchTile";

export default function SavedScreen() {
  const [bookmarks, setBookmarks] = useState([]);
  const [search, setSearch] = useState("");
  const [locations, setLocations] = useState([]);

  useFocusEffect(
    useCallback(() => {
      // This will run every time the screen is focused
      const userBookmarks = dataHandler.getUser(data.currentUserId).bookmarks;
      setBookmarks(userBookmarks);

      setLocations(
        dataHandler
          .getLocations()
          .filter(
            (location) =>
              userBookmarks.includes(location.id) &&
              location.name.toLowerCase().includes(search.toLowerCase())
          )
      );
    }, [search]) // Trigger the effect every time 'search' changes or screen focuses
  );

  useEffect(() => {
    // This will run on mount, when bookmarks are set, or when search changes
    setLocations(
      dataHandler
        .getLocations()
        .filter(
          (location) =>
            bookmarks.includes(location.id) &&
            location.name.toLowerCase().includes(search.toLowerCase())
        )
    );
  }, [search, bookmarks]);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <View style={savedPage.searchBar}>
          <Ionicons name="search" size="20" margin="3" />
          <TextInput
            value={search}
            onChangeText={(text) => setSearch(text)}
            placeholder="Search Saved"
            style={savedPage.input}
          ></TextInput>
        </View>

        <View style={savedPage.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
            {bookmarks.length === 0 ? (
              <Text style={savedPage.noLocationsText}>No Saved Locations</Text> // Display this when bookmarks array is empty
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
      </View>
    </TouchableWithoutFeedback>
  );
}

const savedPage = StyleSheet.create({
  searchBar: {
    padding: 10,
    flexDirection: "row",
    width: "82%",
    backgroundColor: colours.white,
    borderRadius: 10,
    alignItems: "center",
    marginTop: "70",
    marginBottom: "15",
  },
  container: {
    width: "82%",
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
