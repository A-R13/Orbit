import { Text, Image, StyleSheet, View, Pressable } from "react-native";
import { Link } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useEffect, useState } from "react";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import data from "@data";
import styles from "@styles";
import colours from "@colours";
import dataHandler from "@dataHandler";

export default function SearchTile({
  locationId,
  name,
  address,
  rating,
  status,
  image,
  numReviews,
}) {
  // const user = dataHandler.getUser(data.currentUserId);
  // const [bookmarks, setBookmarks] = useState(user.bookmarks);
  // const [bookmark, setBookmark] = useState(user.bookmarks.includes(locationId));

  // useEffect(() => {
  //   if (user.bookmarks.includes(locationId)) {
  //     setBookmark(true);
  //   } else {
  //     setBookmark(false);
  //   }
  // }, [locationId]);

  // const toggleBookmark = () => {
  //   setBookmark(!bookmark);
  //   const check = dataHandler.getUser(data.currentUserId);
  //   if (bookmark === true) {
  //     dataHandler.addBookmark(data.currentUserId, locationId);
  //     setBookmarks((prevBookmarks) => [...prevBookmarks, locationId]);
  //   } else if (bookmark == false) {
  //     dataHandler.removeBookmark(data.currentUserId, locationId);
  //     setBookmarks((prevBookmarks) =>
  //       prevBookmarks.filter((id) => id !== locationId)
  //     );
  //   }
  // };
  function statusToText(status) {
    if (status <= 1) {
      return "Very quiet";
    } else if (status <= 2) {
      return "Quiet";
    } else if (status <= 3) {
      return "Moderate";
    } else if (status <= 4) {
      return "Busy";
    } else {
      return "Very busy";
    }
  }

  return (
    <Link
      push
      href={{
        pathname: "/location",
        params: { locationId },
      }}
      asChild
    >
      <Pressable style={searchTile.searchTile}>
        <View style={searchTile.overlay}>
          <Image source={{ uri: image }} style={searchTile.smallImage} />
          {/* <Pressable style={searchTile.circle} onPress={toggleBookmark}>
            <Ionicons
              style={searchTile.icon}
              name={bookmark ? "bookmark" : "bookmark-outline"}
              size={24}
              color={bookmark ? colours.purple : "black"}
            />
          </Pressable> */}
        </View>
        <View style={searchTile.tileContent}>
          <Text numberOfLines={2} ellipsizeMode="tail" style={styles.text}>
            {name}
          </Text>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={searchTile.addressText}
          >
            {address}
          </Text>
          <Text
            style={[
              styles.reviewText,
              { color: colours.statusToColour(status) },
              { marginVertical: 2 },
            ]}
          >
            {statusToText(status)}
          </Text>
          <View style={styles.reviews}>
            <StarRatingDisplay
              rating={rating}
              color={colours.purple}
              emptyColor={colours.lightPurple}
              starSize={13}
            />
            <Text style={searchTile.reviewText}>({numReviews})</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const searchTile = StyleSheet.create({
  searchTile: {
    height: 110,
    width: "100%",
    flexDirection: "row",
    alignItems: "flex-start",
    backgroundColor: colours.white,
    borderRadius: 8,
    shadowColor: colours.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    marginVertical: 5,
  },
  overlay: {
    position: "relative",
    width: "45%",
    height: "100%",
  },
  smallImage: {
    width: "100%",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  icon: {
    position: "absolute",
    top: 5,
    right: 4,
  },
  circle: {
    position: "absolute",
    width: 32,
    height: 32,
    backgroundColor: "white",
    borderRadius: 50,
    top: 6,
    right: 6,
  },
  tileContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 8,
  },

  addressText: {
    color: colours.darkGrey,
    fontSize: 16,
  },
  reviewText: {
    color: colours.darkGrey,
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "regular",
  },
});
