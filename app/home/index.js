import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import data from "@data";

export default function SettingsScreen() {
  const [locations, setlocations] = useState([]);

  useEffect(() => {
    setlocations(data.locations);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
        >
          {locations.map(({ name, reviews, images }, idx) => (
            <TouchableOpacity key={idx} style={styles.tile}>
              <Image source={{ uri: images[0] }} style={styles.image} />
              <Text style={styles.locationName}>{name}</Text>
              <StarRatingDisplay
                rating={
                  reviews.reduce((sum, review) => sum + review.rating, 0) /
                  reviews.length
                }
                color="#5928ED"
                emptyColor="#A489F5"
                starSize="18"
                style={styles.stars}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },

  tileContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  tile: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 220,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
    marginTop: 35,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: 250,
  },
  image: {
    width: 250,
    height: 160,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  locationName: {
    fontSize: 16,
    paddingTop: 5,
    paddingLeft: 10,
    fontWeight: "400",
    textAlign: "left",
    width: "100%",
  },
  stars: {
    padding: 5,
    width: "100%",
  },
});
