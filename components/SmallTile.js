import { Text, Image, StyleSheet, View, Pressable } from "react-native";
import { Link } from "expo-router";

import { StarRatingDisplay } from "react-native-star-rating-widget";

import styles from "@styles";
import colours from "@colours";

export default function SmallTile({
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
      <Pressable style={smallTile.smallTile}>
        <Image source={{ uri: image }} style={smallTile.smallImage} />
        <View style={smallTile.tileContent}>
          <Text style={styles.smallText} numberOfLines={1}>
            {name}
          </Text>
          <View style={styles.reviews}>
            <StarRatingDisplay
              rating={rating}
              color={colours.purple}
              emptyColor={colours.lightPurple}
              starSize={13}
            />
            <Text style={smallTile.reviewText}>({numReviews})</Text>
          </View>
        </View>
      </Pressable>
    </Link>
  );
}

const smallTile = StyleSheet.create({
  smallTile: {
    height: 160,
    width: 150,
    flexDirection: "coloumn",
    justifyContent: "space-between",
    alignItems: "flex-start",
    backgroundColor: colours.white,
    borderRadius: 8,
    shadowColor: colours.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  smallImage: {
    width: 150,
    height: 100,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  tileContent: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    padding: 8,
  },
  reviewText: {
    color: colours.darkGrey,
    fontSize: 12,
    lineHeight: 12,
    fontWeight: "regular",
  },
});
