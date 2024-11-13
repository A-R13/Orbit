import { Text, View } from "react-native";
import { useLocalSearchParams } from "expo-router";

import data from "@data";
import BackButton from "components/BackButton";

export default function LocationOverview() {
  const { locationId } = useLocalSearchParams();
  const location = data.locations.find(
    (location) => location.id === locationId
  );

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>{JSON.stringify(location)}</Text>
      <Text>{location.name}</Text>
      <Text>{location.description}</Text>
      <BackButton />
    </View>
  );
}
