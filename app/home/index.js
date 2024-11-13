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
import locationsData from "../../locations.json";
import colours from "../../colours";

export default function SettingsScreen() {
  const [locations, setlocations] = useState([]);

  useEffect(() => {
    setlocations(locationsData);
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
          {locations.map(({ name, rating, image }, idx) => (
            <TouchableOpacity key={idx} style={styles.bigtile}>
              <Image source={{ uri: image }} style={styles.bigImage} />
              <Text style={styles.locationName}>{name}</Text>
              <StarRatingDisplay
                rating={rating}
                color={colours.purple}
                emptyColor={colours.lightPurple}
                starSize="18"
                style={styles.stars}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Text style={styles.headingText}>Study</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
        >
          {locations.map(({ name, rating, image }, idx) => (
            <TouchableOpacity key={idx} style={styles.smalltile}>
              <Image source={{ uri: image }} style={styles.smallImage} />
              <Text style={styles.locationName}>{name}</Text>
              <StarRatingDisplay
                rating={rating}
                color={colours.purple}
                emptyColor={colours.lightPurple}
                starSize="14"
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
  bigtile: {
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
  bigImage: {
    width: 250,
    height: 160,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  smalltile: {
    justifyContent: "flex-start",
    alignItems: "center",
    width: 140,
    height: 180,
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
  smallImage: {
    width: 140,
    height: 100,
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
