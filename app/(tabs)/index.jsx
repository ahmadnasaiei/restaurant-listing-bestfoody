import { Ionicons } from "@expo/vector-icons";
import { router, useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { homeStyles } from "../../assets/styles/home.styles";
import RestaurantCard from "../../components/RestaurantCard";
import { fetchRestaurants as RestaurantAPI } from "../../services/restaurantAPI";
import { fetchReviews as ReviewAPI } from "../../services/reviewAPI";

const HomeScreen = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [reviewData, setReviewData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadData = async () => {
    setIsLoading(true);
    const restaurant = await RestaurantAPI.getAllRestaurants();
    const review = await ReviewAPI.getAllReviews();
    setRestaurantData(restaurant);
    setReviewData(review);
    setFilteredRestaurants(restaurant);
    setIsLoading(false);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    const filtered = restaurantData.filter(
      (r) =>
        r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        r.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredRestaurants(filtered);
  }, [searchQuery, restaurantData]);

  return (
    <View style={homeStyles.container}>
      {/* HEADER */}
      <View style={homeStyles.headerContainer}>
        <View style={homeStyles.titleContainer}>
          <Text style={homeStyles.title}>
            Best<Text style={{ color: "#D82F36" }}>Foody</Text>
          </Text>
        </View>
        <View>
          <View style={homeStyles.searchContainer}>
            <Ionicons
              style={homeStyles.searchIcon}
              name="search-outline"
              size={26}
            />
            <TextInput
              style={homeStyles.searchInput}
              placeholder="Search restaurants or categories"
              placeholderTextColor={"#9c9c9c"}
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
              returnKeyType="search"
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={() => setSearchQuery("")}>
                <Ionicons
                  style={homeStyles.searchIcon}
                  name="close-circle"
                  size={26}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>

      {/* RESTAURANT LIST */}
      {isLoading && <ActivityIndicator size="large" color="#D82F36" />}
      <FlatList
        data={filteredRestaurants}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => router.push(`/screens/${item.id}`)}
              activeOpacity={0.8}
            >
              <RestaurantCard item={item} reviewData={reviewData} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default HomeScreen;
