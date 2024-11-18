import { View, Text, Image, Pressable, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { StarRatingDisplay } from "react-native-star-rating-widget";

import styles from "@styles";
import colours from "@colours";

export default function LargeTile({
  locationId,
  name,
  rating,
  image,
  numReviews,
}) {
  return (
    <Link
      push
      href={{
        pathname: "/location",
        params: { locationId },
      }}
      asChild
    >
      <Pressable style={largeTile.largeTile}>
        <Image source={{ uri: image }} style={largeTile.image} />
        <View style={largeTile.tileContent}>
          <Text style={styles.smallText}>{name}</Text>
          <View style={styles.reviews}>
            <StarRatingDisplay
              rating={rating}
              color={colours.purple}
              emptyColor={colours.lightPurple}
              starSize={16}
            />
            <Text style={largeTile.reviewText}>{numReviews} Review/s</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const largeTile = StyleSheet.create({
  largeTile: {
    height: 268,
    width: 330,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: colours.white,
    borderRadius: 8,
    shadowColor: colours.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    height: 220,
    width: 330,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  tileContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 8,
  },
  reviewText: {
    paddingTop: 2,
    paddingLeft: 5,
    color: colours.darkGrey,
    fontSize: 14,
    lineHeight: 14,
    fontWeight: "regular",
  },
});
