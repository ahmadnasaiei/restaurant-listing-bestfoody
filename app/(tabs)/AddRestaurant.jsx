import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
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
import { addRestaurantStyles } from "../../assets/styles/addRestaurant.styles";
import { detailStyles } from "../../assets/styles/detail.styles";
import { fetchRestaurants as RestaurantAPI } from "../../services/restaurantAPI";

const AddRestaurant = () => {
  const [restaurantName, setRestaurantName] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const categories = [
    "Malaysian",
    "Chinese",
    "Middle Eastern",
    "Italian",
    "Mexican",
    "American",
    "Japanese",
    "Indian",
    "Thai",
    "Mediterranean",
    "French",
    "Western",
    "Other",
  ];

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      const newRestaurant = {
        name: restaurantName,
        category: selectedCategory,
        imageUrl,
      };
      await RestaurantAPI.createRestaurant(newRestaurant);

      setIsSubmitting(false);
      setImageUrl("");
      setRestaurantName("");
      setSelectedCategory("");
      router.back();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={addRestaurantStyles.container}>
        {/* HEADER */}
        <View style={detailStyles.headerContainer}>
          <TouchableOpacity
            onPress={() => {
              router.back();
            }}
          >
            <Ionicons name="chevron-back-outline" size={26} />
          </TouchableOpacity>
          <Text style={detailStyles.headerTitle}>Add Restaurant</Text>
        </View>

        {/* ADD RESTAURANT FORM */}
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <ScrollView
            contentContainerStyle={{ flexGrow: 1, padding: 16 }}
            keyboardShouldPersistTaps="handled"
          >
            <View style={addRestaurantStyles.formContainer}>
              <Text style={detailStyles.writeReviewTitle}>
                Restaurant Details
              </Text>
              <View>
                <Text style={detailStyles.ratingInputLabel}>
                  Restaurant Name
                </Text>
                <TextInput
                  value={restaurantName}
                  onChangeText={setRestaurantName}
                  style={addRestaurantStyles.restaurantNameInput}
                  placeholder="Enter Restaurant Name"
                  placeholderTextColor={"#9c9c9c"}
                  required
                />
              </View>
              <View style={detailStyles.commentInputContainer}>
                <Text style={detailStyles.ratingInputLabel}>Category</Text>
                <FlatList
                  data={categories}
                  keyExtractor={(item) => item}
                  numColumns={3}
                  contentContainerStyle={{ gap: 10 }}
                  columnWrapperStyle={{ gap: 10, marginTop: 10 }}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => setSelectedCategory(item)}
                      style={{
                        paddingVertical: 8,
                        paddingHorizontal: 12,
                        backgroundColor:
                          selectedCategory === item ? "#D82F36" : "#f0f0f0",
                        borderRadius: 8,
                      }}
                    >
                      <Text
                        style={{
                          color: selectedCategory === item ? "white" : "black",
                        }}
                      >
                        {item}
                      </Text>
                    </TouchableOpacity>
                  )}
                  scrollEnabled={false}
                />
              </View>
              <View style={detailStyles.commentInputContainer}>
                <Text style={detailStyles.ratingInputLabel}>Image URL</Text>
                <TextInput
                  value={imageUrl}
                  onChangeText={setImageUrl}
                  style={addRestaurantStyles.restaurantNameInput}
                  placeholder="https://example.com/image.jpg"
                  placeholderTextColor={"#9c9c9c"}
                  required
                />
              </View>
              <TouchableOpacity
                style={addRestaurantStyles.submitButton}
                onPress={handleSubmit}
                disabled={isSubmitting}
              >
                <Text style={detailStyles.submitButtonText}>
                  {isSubmitting ? "Submitting..." : "Add Restaurant"}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default AddRestaurant;
