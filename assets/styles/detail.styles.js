import { StyleSheet } from "react-native";

export const detailStyles = StyleSheet.create({
  headerContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
    gap: 10,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4D4C4F",
  },
  writeReview: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fff",
    padding: 15,
    marginHorizontal: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 5,
  },
  writeReviewTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  ratingInputLabel: {
    fontSize: 16,
    marginTop: 15,
  },
  commentInputContainer: {
    marginTop: 15,
  },
  commentInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: "#333",
    marginTop: 10,
    height: 100,
  },
  submitButton: {
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: "#E41E26",
    padding: 15,
    borderRadius: 5,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  reviewsContainer: {
    padding: 20,
  },
  reviewsTitle: {
    fontSize: 24,
    fontWeight: "bold",
  },
  reviewContainer: {
    marginTop: 15,
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1.41,
    elevation: 5,
  },
  reviewHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reviewComment: {
    fontSize: 16,
    lineHeight: 28,
  },
  reviewDate: {
    color: "#9c9c9c",
    paddingBottom: 7,
  },
  noReview: {
    fontSize: 16,
    lineHeight: 28,
    textAlign: "center",
    color: "#9c9c9c",
  },
});
