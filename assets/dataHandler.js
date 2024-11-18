import AsyncStorage from "@react-native-async-storage/async-storage";
import data from "@data";

const DATA_STORE_KEY = "@data";
// Initialise in-memory data using data.json
let memoryData = { ...data };

const dataHandler = {
  // Load data from AsyncStorage (if available)
  loadData: async () => {
    try {
      const storedData = await AsyncStorage.getItem(DATA_STORE_KEY);
      if (storedData) {
        console.log("Loading data");
        memoryData = JSON.parse(storedData);
      } else {
        await AsyncStorage.setItem(DATA_STORE_KEY, JSON.stringify(data));
      }
    } catch (error) {
      console.error("Failed to load data:", error);
    }
  },

  // Save in-memory data to AsyncStorage
  saveData: async () => {
    try {
      await AsyncStorage.setItem(DATA_STORE_KEY, JSON.stringify(memoryData));
      console.log("Saving data");
    } catch (error) {
      console.error("Failed to save data:", error);
    }
  },

  clearAll: async () => {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error("Clear error:", error);
    }
    console.log("Cleared all data");
  },

  // Get all users
  getUsers: () => memoryData.users,

  // Get a user by ID
  getUser: (id) => memoryData.users.find((user) => user.id === id),

  // Get all locations
  getLocations: () => memoryData.locations,

  // Get a location by ID
  getLocation: (id) => memoryData.locations.find((loc) => loc.id === id),

  // Add a new user
  addUser: (newUser) => {
    memoryData.users.push(newUser);
    dataHandler.saveData();
  },

  // Add a new review to a location
  addReview: (locationId, review) => {
    const location = memoryData.locations.find((loc) => loc.id === locationId);
    if (location) {
      location.reviews.push(review);
      dataHandler.saveData();
    }
  },
};

dataHandler.loadData();

export default dataHandler;
