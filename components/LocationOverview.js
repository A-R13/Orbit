import { Text, View, ScrollView, StyleSheet } from "react-native";

import YesNoButtonGroup from "./YesNoButtonGroup";

import styles from "@styles";
import colours from "@colours";

export default function LocationOverview({ location }) {
  return (
    <ScrollView
      contentContainerStyle={locationOverview.container}
      style={locationOverview.locationOverview}
      showsVerticalScrollIndicator={false}
    >
      <View style={locationOverview.section}>
        <Text style={styles.sectionText}>Description</Text>
        <Text style={styles.smallText}>{location.description}</Text>
      </View>
      <View style={locationOverview.section}>
        <Text style={styles.sectionText}>Top-rated community note</Text>
        <Text style={styles.smallText}>TBC</Text>
        <View style={locationOverview.helpful}>
          <Text style={styles.smallText}>Is this note helpful?</Text>
          <YesNoButtonGroup onYes={() => {}} onNo={() => {}} />
        </View>
      </View>
    </ScrollView>
  );
}

const locationOverview = StyleSheet.create({
  locationOverview: {
    width: "100%",
  },
  container: {
    rowGap: 32,
  },
  section: {
    rowGap: 8,
  },
  helpful: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    columnGap: 8,
  },
});
