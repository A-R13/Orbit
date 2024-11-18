import { Text, View, ScrollView, StyleSheet } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";

import styles from "@styles";
import colours from "@colours";
import dataHandler from "@dataHandler";

export default function LocationReviews({ location }) {
  return (
    <ScrollView
      contentContainerStyle={locationReviews.container}
      style={locationReviews.locationReviews}
      showsVerticalScrollIndicator={false}
    >
      {location.reviews.map(({ userId, rating, text }, idx) => (
        <View style={locationReviews.review} key={idx}>
          <Text style={styles.smallText}>
            {dataHandler.getUser(userId).username}
          </Text>
          <View style={locationReviews.row}>
            <StarRatingDisplay
              rating={rating}
              color={colours.purple}
              emptyColor={colours.lightPurple}
              starSize={16}
            />
            <Text style={[styles.smallText, { color: colours.darkGrey }]}>
              {rating.toFixed(1)}
            </Text>
          </View>
          <Text style={styles.smallText}>{text}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const locationReviews = StyleSheet.create({
  locationReviews: {
    width: "100%",
  },
  container: {
    rowGap: 16,
  },
  review: {
    width: "100%",
    backgroundColor: colours.white,
    borderRadius: 8,
    padding: 16,
    rowGap: 4,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    columnGap: 4,
  },
});
