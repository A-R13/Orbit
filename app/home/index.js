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
import colours from "../../colours";
import data from "@data";

export default function SettingsScreen() {
  const [locations, setlocations] = useState([]);

  useEffect(() => {
    setlocations(data.locations);
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headingText}>Stellar recommendations</Text>
        <Text style={styles.descriptionText}>
          Unearth the best locations on campus to study, relax or grab a bite
          with our curated Stellar recommendations!
        </Text>
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
    width: 250,
    height: 220,
    backgroundColor: colours.white,
    borderRadius: 10,
    marginRight: 10,
    marginTop: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  image: {
    width: 250,
    height: 160,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  headingText: {
    fontSize: 20,
    paddingLeft: 15,
    marginTop: 25,
    fontWeight: "800",
  },
  descriptionText: {
    fontSize: 14,
    paddingLeft: 15,
    marginTop: 5,
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
