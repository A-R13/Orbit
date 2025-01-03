import { StyleSheet } from "react-native";
import colours from "@colours";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tileContainer: {
    flexDirection: "row",
    columnGap: 8,
  },
  titleText: {
    fontSize: 96,
    lineHeight: 96,
    fontWeight: "bold",
    textAlign: "center",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  sectionText: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: "bold",
    textAlign: "left",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  text: {
    fontSize: 24,
    lineHeight: 24,
    fontWeight: "regular",
    textAlign: "left",
  },
  smallText: {
    fontSize: 16,
    lineHeight: 16,
    fontWeight: "regular",
    textAlign: "left",
  },
  contentPadding: {
    width: "100%",
    paddingTop: 16,
    paddingHorizontal: 32,
  },
  horizontalTiles: {
    marginTop: 8,
    marginBottom: 24,
    marginHorizontal: 32,
    overflow: "visible",
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
  dropShadow: {
    shadowColor: colours.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  reviews: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
