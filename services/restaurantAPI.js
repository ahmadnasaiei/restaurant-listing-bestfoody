const BASE_URL = "http://localhost:3000";

export const fetchRestaurants = {
  getAllRestaurants: async () => {
    try {
      const response = await fetch(`${BASE_URL}/restaurants`);
      const data = await response.json();
      return data || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  searchRestaurantByName: async (query) => {
    try {
      const response = await fetch(
        `${BASE_URL}/restaurants?name=${encodeURIComponent(query)}`
      );
      const data = await response.json();
      return data.restaurant || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  searchRestaurantByCategory: async (category) => {
    try {
      const response = await fetch(
        `${BASE_URL}/restaurants?category=${encodeURIComponent(category)}`
      );
      const data = await response.json();
      return data.restaurants || [];
    } catch (error) {
      console.error(error);
      return [];
    }
  },

  getRestaurantById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/restaurants/${id}`);
      const data = await response.json();
      return data || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },

  createRestaurant: async (restaurant) => {
    try {
      const response = await fetch(`${BASE_URL}/restaurants`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurant),
      });
      const data = await response.json();
      return data.restaurant || null;
    } catch (error) {
      console.error(error);
      return null;
    }
  },
};
