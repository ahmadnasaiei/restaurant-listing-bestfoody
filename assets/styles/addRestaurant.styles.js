import { StyleSheet } from "react-native";

export const addRestaurantStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 5,
  },
  restaurantNameInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    color: "#333",
    marginTop: 10,
    fontSize: 16,
  },
  submitButton: {
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#E41E26",
    padding: 15,
    borderRadius: 5,
  },
});
