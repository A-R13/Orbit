import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
} from "react-native";

import { useLocalSearchParams } from "expo-router";

import data from "@data";
import styles from "@styles";
import colours from "@colours";

import BackButton from "components/BackButton";

const BORDER_RADIUS = 40;
const PANEL_HEIGHT = 500;
export default function LocationOverview() {
  const screenHeight = Dimensions.get("window").height;

  const { locationId } = useLocalSearchParams();
  const location = data.locations.find(
    (location) => location.id === locationId
  );

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
      <View style={overview.bottomRectangle}>
        <Text style={styles.smallText}>{JSON.stringify(location)}</Text>
      </View>
    </View>
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
  bottomRectangle: {
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
});
