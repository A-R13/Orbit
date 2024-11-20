import { ScrollView, View, Text } from "react-native";

import LargeTile from "components/LargeTile";

import dataHandler from "@dataHandler";
import styles from "@styles";

export default function HomeRecommendation() {
  return (
    <>
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
    </>
  );
}
