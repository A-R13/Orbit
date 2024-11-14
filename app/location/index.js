import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useState, useCallback } from "react";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import SavedButton from "components/SavedButton";
import LocationTabBar from "components/LocationTabBar";

import data from "@data";
import styles from "@styles";
import colours from "@colours";

import BackButton from "components/BackButton";

const BORDER_RADIUS = 40;
const PANEL_HEIGHT = 500;
export default function LocationOverview() {
  const screenHeight = Dimensions.get("window").height;
  const [tab, setTab] = useState("Overview");

  const { locationId } = useLocalSearchParams();
  const location = data.locations.find(
    (location) => location.id === locationId
  );

  useFocusEffect(
    useCallback(() => {
      setTab("Overview");
    }, [])
  );

  // Render content based on the selected tab
  function renderContent() {
    switch (tab) {
      case "Notes":
        return <Text style={styles.smallText}>Notes</Text>;
      case "Reviews":
        return <Text style={styles.smallText}>Reviews</Text>;
      default:
        return <Text style={styles.smallText}>Overview</Text>;
    }
  }

  return (
    <View style={overview.container}>
      <ImageBackground
        source={{ uri: location.images[0] }}
        style={[
          overview.backgroundImage,
          { height: screenHeight - PANEL_HEIGHT - BORDER_RADIUS },
        ]}
      >
        <BackButton />
      </ImageBackground>
      <View style={overview.backgroundPanel}>
        <View style={overview.header}>
          <Text style={styles.sectionText} numberOfLines={2}>
            {location.name}
          </Text>
          <View style={overview.addressRow}>
            <Ionicons name="location-sharp" size={24} color={colours.black} />
            <Text style={[styles.smallText, { flex: 1 }]} numberOfLines={2}>
              {location.address}
            </Text>
            <SavedButton />
          </View>
          <View style={overview.ratings}>
            <Text style={styles.smallText}>
              {(Math.floor(averageRating(location.reviews) * 2) / 2).toFixed(1)}
            </Text>
            <StarRatingDisplay
              rating={averageRating(location.reviews)}
              color={colours.purple}
              emptyColor={colours.lightPurple}
              starSize={16}
            />
            <Text style={[styles.smallText, { color: colours.darkGrey }]}>
              {location.reviews.length} reviews
            </Text>
          </View>
        </View>
        <LocationTabBar tab={tab} setTab={setTab} />
        {renderContent()}
      </View>
    </View>
  );
}

function averageRating(reviews) {
  return (
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
  );
}

const overview = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    paddingTop: 64,
    paddingHorizontal: 32,
  },
  backgroundPanel: {
    height: PANEL_HEIGHT,
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: colours.grey,
    borderTopLeftRadius: BORDER_RADIUS,
    borderTopRightRadius: BORDER_RADIUS,
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1,
    paddingTop: 32,
    paddingHorizontal: 32,
  },
  header: {
    rowGap: 8,
  },
  addressRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  ratings: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    columnGap: 4,
  },
});
