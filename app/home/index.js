import { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Touchable,
  TouchableOpacity,
} from "react-native";

import LargeTile from "components/LargeTile";
import SmallTile from "components/SmallTile";

import data from "@data";
import styles from "@styles";
import { Link } from "expo-router";
import colours from "@colours";
import { useNavigation } from "expo-router";

export default function SettingsScreen() {
  const [locations, setlocations] = useState(data.locations);
  const [recentlyViewed, setRecentlyViewed] = useState();
  const navigation = useNavigation();
  const UserId = "user_1";

  useEffect(() => {
    const user = data.users.find((user) => user.id === UserId);
    setRecentlyViewed(user.recentlyViewed);
  }, []);

  const addRecentlyViewed = (locationID) => {
    setRecentlyViewed((prevRecentlyViewed) => {
      if (prevRecentlyViewed.includes(locationID)) {
        return prevRecentlyViewed;
      }
      return [locationID, ...prevRecentlyViewed];
    });
  };

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
                numReviews={reviews.length}
                image={images[0]}
              />
            ))}
        </ScrollView>
        <Text style={{ ...styles.contentPadding, ...styles.sectionText }}>
          Recently viewed
        </Text>
        {/* <ScrollView
          horizontal={true}
          contentContainerStyle={styles.tileContainer}
          showsHorizontalScrollIndicator={false}
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
            .map(({ name, reviews, images }, idx) => (
              <SmallTile
                key={idx}
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
            .map(({ name, reviews, images }, idx) => (
              <SmallTile
                key={idx}
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
            .map(({ name, reviews, images }, idx) => (
              <SmallTile
                key={idx}
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
              Greenary
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
            .filter(({ categories }) => categories.includes("greenary"))
            .map(({ name, reviews, images }, idx) => (
              <SmallTile
                key={idx}
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
