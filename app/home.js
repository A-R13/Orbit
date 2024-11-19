import { SafeAreaView, ScrollView } from "react-native";

import HomeRecommendation from "components/HomeRecommendation";
import HomeRecent from "components/HomeRecent";
import HomeCategory from "components/HomeCategory";

import styles from "@styles";

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <HomeRecommendation />
        <HomeRecent />
        <HomeCategory category={"Study"} />
        <HomeCategory category={"Food"} />
        <HomeCategory category={"Coffee"} />
        <HomeCategory category={"Greenery"} />
      </ScrollView>
    </SafeAreaView>
  );
}
