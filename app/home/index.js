import { useState } from "react";
import { View, ScrollView, Text } from "react-native";

import LargeTile from "components/LargeTile";
import SmallTile from "components/SmallTile";

import data from "@data";
import styles from "@styles";

export default function SettingsScreen() {
  const [locations, setlocations] = useState(data.locations);
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
          {locations
            .filter(({ name }) =>
              [
                "Science & Engineering",
                "Village Green",
                "XS Expresso",
              ].includes(name)
            )
            .map(({ name, reviews, images }, idx) => (
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
        </ScrollView>
        <Text style={styles.headingText}>Study</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
        >
          {locations
            .filter(({ categories }) => categories.includes("study"))
            .map(({ name, reviews, images }, idx) => (
              <SmallTile
                key={idx}
                name={name}
                rating={
                  reviews.reduce((sum, review) => sum + review.rating, 0) /
                  reviews.length
                }
                image={images[0]}
              />
            ))}
        </ScrollView>
        <Text style={styles.headingText}>Food</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
        >
          {locations
            .filter(({ categories }) => categories.includes("food"))
            .map(({ name, reviews, images }, idx) => (
              <SmallTile
                key={idx}
                name={name}
                rating={
                  reviews.reduce((sum, review) => sum + review.rating, 0) /
                  reviews.length
                }
                image={images[0]}
              />
            ))}
        </ScrollView>
        <Text style={styles.headingText}>Coffee</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
        >
          {locations
            .filter(({ categories }) => categories.includes("coffee"))
            .map(({ name, reviews, images }, idx) => (
              <SmallTile
                key={idx}
                name={name}
                rating={
                  reviews.reduce((sum, review) => sum + review.rating, 0) /
                  reviews.length
                }
                image={images[0]}
              />
            ))}
        </ScrollView>
        <Text style={styles.headingText}>Greenary</Text>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
        >
          {locations
            .filter(({ categories }) => categories.includes("greenary"))
            .map(({ name, reviews, images }, idx) => (
              <SmallTile
                key={idx}
                name={name}
                rating={
                  reviews.reduce((sum, review) => sum + review.rating, 0) /
                  reviews.length
                }
                image={images[0]}
              />
            ))}
        </ScrollView>
      </ScrollView>
    </View>
  );
}
