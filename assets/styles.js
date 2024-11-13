import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },

  tileContainer: {
    flexDirection: "row",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  tile: {
    justifyContent: "flex-start",
    alignItems: "center",
    height: 220,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginRight: 10,
    marginTop: 20,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    width: 250,
  },
  image: {
    width: 250,
    height: 160,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  locationName: {
    fontSize: 16,
    paddingTop: 5,
    paddingLeft: 10,
    fontWeight: "400",
    textAlign: "left",
    width: "100%",
  },
  stars: {
    padding: 5,
    width: "100%",
  },
  headingText: {
    fontSize: 20,
    paddingLeft: 15,
    marginTop: 25,
    fontWeight: "bold",
  },
  descriptionText: {
    fontSize: 14,
    paddingLeft: 15,
    marginTop: 5,
  },
});
