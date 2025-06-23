import { Image } from "expo-image";
import { Text, View } from "react-native";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { cardStyles } from "../assets/styles/card.styles";

export default function RestaurantCard({ item, reviewData }) {
  const getAverageRating = (restaurantId) => {
    const matched = reviewData.filter((r) => r.restaurantId === restaurantId);
    const reviewCount = matched.length;

    if (reviewCount === 0) return { average: 0, reviewCount: 0 };

    const total = matched.reduce((sum, r) => sum + r.rating, 0);
    return {
      average: total / reviewCount,
      reviewCount,
    };
  };

  const { average, reviewCount } = getAverageRating(item.id);

  return (
    <View key={item.id} style={cardStyles.container}>
      <View>
        <Image
          source={{ uri: item.imageUrl }}
          contentFit="cover"
          style={cardStyles.restaurantImage}
        />
        <View style={cardStyles.card}>
          <View style={cardStyles.cardHeader}>
            <Text style={cardStyles.restaurantName}>{item.name}</Text>
            <Text style={cardStyles.restaurantCategory}>{item.category}</Text>
          </View>
          <View style={cardStyles.rating}>
            <StarRatingDisplay
              rating={average}
              starSize={20}
              starStyle={{ marginHorizontal: 0 }}
            />
            <Text style={{ marginLeft: 5 }}>{average.toFixed(1)}</Text>
            <Text style={{ marginLeft: 5 }}>({reviewCount} reviews)</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
