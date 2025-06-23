import { StyleSheet } from "react-native";

export const cardStyles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#F7F7F7",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 5,
  },
  cardHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  restaurantImage: {
    width: "100%",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: 200,
  },
  restaurantName: {
    flex: 1,
    marginRight: 10,
    numberOfLines: 1,
    ellipsizeMode: "tail",

    fontSize: 24,
    fontWeight: "bold",
  },
  restaurantCategory: {
    flexShrink: 0,
    maxWidth: 100,
    numberOfLines: 1,
    ellipsizeMode: "tail",

    backgroundColor: "#E41E26",
    color: "#fff",
    padding: 5,
    borderRadius: 50,
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },
});
