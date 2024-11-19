import { ScrollView, View, Text } from "react-native";
import { Link } from "expo-router";
import { useNavigation } from "@react-navigation/native";

import SmallTile from "components/SmallTile";

import dataHandler from "@dataHandler";
import styles from "@styles";

export default function HomeCategory({ category }) {
  const navigation = useNavigation();

  const handleLinkClick = () => {
    const currentDateTime = new Date().toISOString();
    navigation.navigate("search", {
      category,
      date: currentDateTime,
    });
  };

  return (
    <>
      <View style={[styles.contentPadding, styles.reviews]}>
        <Text style={styles.sectionText} numberOfLines={2}>
          {category}
        </Text>
        <Text
          onPress={handleLinkClick}
          style={[styles.smallText, { color: colours.purple }]}
        >
          View All
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={styles.tileContainer}
        showsHorizontalScrollIndicator={false}
        style={styles.horizontalTiles}
      >
        {dataHandler
          .getLocations()
          .filter(({ categories }) => categories.includes(category))
          .map(({ id, name, reviews, images }, idx) => (
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
    </>
  );
}
