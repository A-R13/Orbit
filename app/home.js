import { useState, useCallback } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";
import { useFocusEffect } from "expo-router";

import LargeTile from "components/LargeTile";
import SmallTile from "components/SmallTile";
import HomeSection from "components/HomeSection";

import data from "@data";
import dataHandler from "@dataHandler";
import styles from "@styles";

export default function HomeScreen() {
  const [recent, setRecent] = useState([]);

  useFocusEffect(
    useCallback(() => {
      const user = dataHandler.getUser(data.currentUserId);
      setRecent(
        user.recentlyViewed.map((locationId) =>
          dataHandler.getLocation(locationId)
        )
      );
    }, [])
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Stellar recommendations section */}
        <View style={{ ...styles.contentPadding, rowGap: 8 }}>
          <Text style={styles.sectionText}>Stellar recommendations</Text>
          <Text style={styles.smallText}>
            Unearth the best locations on campus to study, relax or grab a bite
            with our curated Stellar recommendations!
          </Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tileContainer}
          style={styles.horizontalTiles}
        >
          {dataHandler
            .getLocations()
            .filter(({ name }) =>
              [
                "Science & Engineering Study Space",
                "Village Green",
                "XS Expresso",
              ].includes(name)
            )
            .map(({ id, name, reviews, images }, idx) => (
              <LargeTile
                key={idx}
                locationId={id}
                name={name}
                rating={
                  reviews.reduce((sum, review) => sum + review.rating, 0) /
                  reviews.length
                }
                numReviews={reviews.length}
                image={images[0]}
              />
            ))}
        </ScrollView>

        {/* Recently viewed section */}
        <Text style={{ ...styles.contentPadding, ...styles.sectionText }}>
          Recently viewed
        </Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalTiles}
        >
          {recent.map(({ id, name, reviews, images }, idx) => (
            <SmallTile
              key={idx}
              locationId={id}
              name={name}
              rating={
                reviews.reduce((sum, review) => sum + review.rating, 0) /
                reviews.length
              }
              numReviews={reviews.length}
              image={images[0]}
            />
          ))}
        </ScrollView>

        {/* Other category sections */}
        <HomeSection category={"Study"} />
        <HomeSection category={"Food"} />
        <HomeSection category={"Coffee"} />
        <HomeSection category={"Greenery"} />
      </ScrollView>
    </SafeAreaView>
  );
}
