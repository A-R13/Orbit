import { Text, TouchableOpacity, Image, StyleSheet, View } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";

import styles from "@styles";
import colours from "@colours";

export default function SmallTile({ name, rating, image, numReviews }) {
  return (
    <TouchableOpacity style={smallTile.smallTile}>
      <Image source={{ uri: image }} style={smallTile.smallImage} />
      <View style={smallTile.tileContent}>
        <Text style={styles.smallText}>{name}</Text>
        <StarRatingDisplay
          rating={rating}
          color="#5928ED"
          emptyColor="#A489F5"
          starSize="14"
          style={styles.stars}
        />
        <Text style={styles.smallText}>({numReviews})</Text>
      </View>
    </TouchableOpacity>
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
});
