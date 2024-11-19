import { useState, useCallback } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { useFocusEffect } from "expo-router";

import SmallTile from "components/SmallTile";

import data from "@data";
import dataHandler from "@dataHandler";
import styles from "@styles";
import colours from "@colours";

export default function HomeRecent() {
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
    <>
      <View style={[styles.contentPadding, styles.reviews]}>
        <Text style={styles.sectionText} numberOfLines={1}>
          Recently viewed
        </Text>
        <Pressable
          onPress={() => {
            dataHandler.clearRecentlyViewed(data.currentUserId);
            setRecent([]);
          }}
        >
          <Text style={[styles.smallText, { color: colours.purple }]}>
            Clear
          </Text>
        </Pressable>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.tileContainer}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalTiles}
      >
        {recent.length > 0 ? (
          recent.map(({ id, name, reviews, images }, idx) => (
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
          ))
        ) : (
          <Text style={[styles.smallText, { color: colours.darkGrey }]}>
            Nothing to see here
          </Text>
        )}
      </ScrollView>
    </>
  );
}
