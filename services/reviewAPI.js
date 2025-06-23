const BASE_URL = "http://localhost:3000";

export const fetchReviews = {
  getAllReviews: async () => {
    try {
      const response = await fetch(`${BASE_URL}/reviews`);
      const data = await response.json();
      return data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  getReviewsByRestaurantId: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/reviews?restaurantId=${id}`);
      const data = await response.json();
      return data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  createReview: async (review) => {
    try {
      const response = await fetch(`${BASE_URL}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
      const data = await response.json();
      return data.review || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
