# 🍽️ BestFoody - React Native Restaurant Review App

BestFoody is a simple restaurant listing and review app built using **React Native** with **Expo** and **TypeScript**. Users can browse restaurants, view details, submit reviews with star ratings, and filter by categories.

---

## 🚀 Getting Started

Follow the steps below to run this project locally on your machine.

### 1. Clone the Repository
```git clone https://github.com/ahmadnasaiei/restaurant-listing-bestfoody.git```
```cd restaurant-review-bestfoody```

### 2. Install Dependencies
```npm install```
# or
```yarn install```

### 3. Install Expo CLI (if not installed)
```npm install -g expo-cli```

### 4. Run the App
```npx expo start```

### 5. Run local API json-server
```npm run start:api```

🔌 Dependencies
React Native
Expo
expo-router
react-native-star-rating-widget
@expo/vector-icons
moment (for date formatting)


⚠️ Important: API Base URL Configuration
The mock API was done locally on json-server and testing the app on a physical device (or emulator) will need you to update the BASE_URL in your API configuration file (e.g., services/RestaurantAPI.js) from:

```const BASE_URL = 'http://localhost:3000';```

To your local IPv4 address (found via ipconfig on Windows or ifconfig on macOS/Linux), for example:

```const BASE_URL = 'http://192.168.1.xxxx:3000';```
