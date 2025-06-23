import { StyleSheet } from "react-native";

export const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
  },
  headerContainer: {
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 36,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#4D4C4F",
  },
  titleContainer: {
    alignItems: "center",
  },
  searchContainer: {
    flexDirection: "row",
    gap: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "#333",
  },
  searchInput: {
    flex: 1,
  },
});
