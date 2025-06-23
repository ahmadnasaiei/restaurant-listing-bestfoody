import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import moment from "moment";
import { useEffect, useState } from "react";
import {
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import StarRating, { StarRatingDisplay } from "react-native-star-rating-widget";
import { detailStyles } from "../../assets/styles/detail.styles";
import RestaurantCard from "../../components/RestaurantCard";
import { fetchRestaurants as RestaurantAPI } from "../../services/restaurantAPI";
import { fetchReviews as ReviewAPI } from "../../services/reviewAPI";

const RestaurantDetails = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [restaurantData, setRestaurantData] = useState(null);
  const [reviewData, setReviewData] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const { id: restaurantId } = useLocalSearchParams();

  const loadData = async () => {
    try {
      const restaurants = await RestaurantAPI.getRestaurantById(restaurantId);
      const reviews = await ReviewAPI.getReviewsByRestaurantId(restaurantId);
      setRestaurantData(restaurants);
      setReviewData(reviews);
    } catch (error) {
      console.log("Error loading data", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmitReview = async () => {
    if (rating === 0 || comment.trim() === "") {
      alert("Please provide both a rating and a comment.");
      return;
    }

    try {
      setIsSubmitting(true);
      const newReview = {
        rating,
        comment,
        restaurantId,
        createdAt: new Date().toISOString(),
      };

      await ReviewAPI.createReview(newReview);

      const updatedReviews = await ReviewAPI.getReviewsByRestaurantId(
        restaurantId
      );
      setReviewData(updatedReviews);

      setRating(0);
      setComment("");
      setIsSubmitting(false);
      alert("Thank you for your review!");
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  useEffect(() => {
    loadData();
  }, [restaurantId]);

  if (isLoading) return <Text>Loading...</Text>;
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <View style={{ flex: 1 }}>
            {/* HEADER */}
            <View style={detailStyles.headerContainer}>
              <TouchableOpacity
                onPress={() => {
                  router.back();
                }}
              >
                <Ionicons name="chevron-back-outline" size={26} />
              </TouchableOpacity>
              <Text style={detailStyles.headerTitle}>
                {restaurantData?.name}
              </Text>
            </View>

            {/* CONTENT */}
            <RestaurantCard item={restaurantData} reviewData={reviewData} />

            {/* ADD REVIEW FORM */}
            <View style={detailStyles.writeReview}>
              <Text style={detailStyles.writeReviewTitle}>Write a Review</Text>
              <View>
                <Text style={detailStyles.ratingInputLabel}>Rating</Text>
                <StarRating
                  rating={rating}
                  onChange={setRating}
                  starSize={35}
                  starStyle={{
                    marginLeft: 0,
                    marginRight: 5,
                    marginVertical: 10,
                  }}
                  color="#FFD700"
                />
              </View>
              <View style={detailStyles.commentInputContainer}>
                <Text>Comment</Text>
                <TextInput
                  value={comment}
                  onChangeText={setComment}
                  multiline
                  style={detailStyles.commentInput}
                  placeholder="Share your experience..."
                  placeholderTextColor={"#9c9c9c"}
                  required
                />
              </View>
              <TouchableOpacity
                style={detailStyles.submitButton}
                onPress={handleSubmitReview}
                disabled={isSubmitting}
              >
                <Text style={detailStyles.submitButtonText}>
                  {isSubmitting ? "Submitting..." : "Submit Review"}
                </Text>
              </TouchableOpacity>
            </View>

            {/* REVIEWS */}
            <View style={detailStyles.reviewsContainer}>
              <Text style={detailStyles.reviewsTitle}>Reviews</Text>
              <FlatList
                data={reviewData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <View style={detailStyles.reviewContainer}>
                    <View style={detailStyles.reviewHeader}>
                      <StarRatingDisplay
                        rating={item.rating}
                        starSize={26}
                        starStyle={{
                          marginHorizontal: 0,
                          marginBottom: 10,
                        }}
                      />
                      <Text style={detailStyles.reviewDate}>
                        {moment(item.createdAt).fromNow()}
                      </Text>
                    </View>
                    <Text style={detailStyles.reviewComment}>
                      {item.comment}
                    </Text>
                  </View>
                )}
                scrollEnabled={false}
              />
              {reviewData.length === 0 && (
                <View style={detailStyles.reviewContainer}>
                  <Text style={detailStyles.noReview}>
                    No reviews yet. Be the first to leave one!
                  </Text>
                </View>
              )}
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default RestaurantDetails;
