import { useState } from "react";
import { View, ScrollView } from "react-native";

import LargeTile from "components/LargeTile";

import data from "@data";
import styles from "@styles";

export default function SettingsScreen() {
  const [locations, setlocations] = useState(data.locations);
  return (
    <View style={styles.container}>
      <ScrollView>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
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
        </ScrollView>
      </ScrollView>
    </View>
  );
}
