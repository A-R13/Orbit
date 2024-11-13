import { Text, View, StyleSheet, ScrollView} from "react-native";
import { useEffect, useState } from "react";


export default function SettingsScreen() {
  const [recommendations, setRecommendations] = useState([{name: "Science & Engineering", rating: "3.5", image: "https://www.learningenvironments.unsw.edu.au/sites/default/files/styles/extra_large/public/images/1.%20Main%20Picture_SEB%20Study%20Space.jpg?itok=4w4-h5T4"}]);

  return (
    <View style={ styles.container}>
      <ScrollView>
        <Text>Home Screen</Text>
        {recommendations.map(({ name, rating, image}, idx) => (
          <View id={idx+name} styles = {styles.tileContainer}> 
          <Text>{name}</Text></View>
        ))}
      </ScrollView>
      
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
  },

  tileContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center ",
    width: "100%",
    paddingTop: 15,
  },
  emptyText: {
    position: "absolute",
    top: "40%",
  },
  tile: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 5,
    marginVertical: 4,
    marginHorizontal: 15,
    alignItems: "center",
    elevation: 2, // Shadow for Android
    shadowColor: "#000", // Shadow for iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: "80%",
  },
});