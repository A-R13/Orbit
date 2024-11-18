import { useState } from "react";
import { SafeAreaView, ScrollView, View, Text } from "react-native";

import LargeTile from "components/LargeTile";

import dataHandler from "@dataHandler";
import styles from "@styles";

export default function HomeScreen() {
  const [locations, setlocations] = useState(dataHandler.getLocations());
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
          {locations.map(({ id, name, reviews, images }, idx) => (
            <LargeTile
              key={idx}
              locationId={id}
              name={name}
              rating={
                reviews.reduce((sum, review) => sum + review.rating, 0) /
                reviews.length
              }
              image={images[0]}
            />
          ))}
        </ScrollView>

        {/* Recently viewed section */}
        <Text style={{ ...styles.contentPadding, ...styles.sectionText }}>
          Recently viewed
        </Text>
        {/* <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tileContainer}
          style={styles.horizontalTiles}
        >
          {locations.map(({ name, reviews, images }, idx) => (
            <LargeTile
              key={idx}
              name={name}
              rating={
                reviews.reduce((sum, review) => sum + review.rating, 0) /
                reviews.length
              }
              image={images[0]}
            />
          ))}
        </ScrollView> */}

        {/* Categories... */}
      </ScrollView>
    </SafeAreaView>
  );
}
