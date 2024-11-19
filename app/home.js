import { useState, useCallback } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";

import LargeTile from "components/LargeTile";
import SmallTile from "components/SmallTile";

import data from "@data";
import dataHandler from "@dataHandler";
import styles from "@styles";
import { useFocusEffect } from "expo-router";
import colours from "@colours";
import { useNavigation } from "expo-router";

export default function HomeScreen() {
  const [locations, setlocations] = useState(dataHandler.getLocations());
  const navigation = useNavigation();
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
          {locations
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

        <View style={{ ...styles.contentPadding, rowGap: 8 }}>
          <View style={styles.reviews}>
            <Text style={styles.sectionText} numberOfLines={2}>
              Study
            </Text>
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
              }}
              onPress={() => navigation.navigate("search")}
            >
              <Text style={{ color: colours.purple, fontSize: 16 }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalTiles}
        >
          {locations
            .filter(({ categories }) => categories.includes("study"))
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
        <View style={{ ...styles.contentPadding, rowGap: 8 }}>
          <View style={styles.reviews}>
            <Text style={styles.sectionText} numberOfLines={2}>
              Food
            </Text>
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
              }}
              onPress={() => navigation.navigate("search")}
            >
              <Text style={{ color: colours.purple, fontSize: 16 }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalTiles}
        >
          {locations
            .filter(({ categories }) => categories.includes("food"))
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
        <View style={{ ...styles.contentPadding, rowGap: 8 }}>
          <View style={styles.reviews}>
            <Text style={styles.sectionText} numberOfLines={2}>
              Coffee
            </Text>
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
              }}
              onPress={() => navigation.navigate("search")}
            >
              <Text style={{ color: colours.purple, fontSize: 16 }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalTiles}
        >
          {locations
            .filter(({ categories }) => categories.includes("coffee"))
            .map(({ id, name, reviews, images }, idx) => (
              <SmallTile
                key={idx}
                name={name}
                locationId={id}
                rating={
                  reviews.reduce((sum, review) => sum + review.rating, 0) /
                  reviews.length
                }
                numReviews={reviews.length}
                image={images[0]}
              />
            ))}
        </ScrollView>
        <View style={{ ...styles.contentPadding, rowGap: 8 }}>
          <View style={styles.reviews}>
            <Text style={styles.sectionText} numberOfLines={2}>
              Greenery
            </Text>
            <TouchableOpacity
              style={{
                alignSelf: "flex-end",
              }}
              onPress={() => navigation.navigate("search")}
            >
              <Text style={{ color: colours.purple, fontSize: 16 }}>
                View All
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalTiles}
        >
          {locations
            .filter(({ categories }) => categories.includes("greenery"))
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
      </ScrollView>
    </SafeAreaView>
  );
}
