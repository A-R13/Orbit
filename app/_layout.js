import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

import colours from "@colours";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: colours.purple,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="search-outline" size={size} color={color} />
          ),
        }}
        initialParams={{ category: "All", date: new Date().toISOString() }} // Pass the category here
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="bookmark-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="account"
        options={{
          title: "Account",
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen name="location" options={{ href: null }} />
      <Tabs.Screen
        name="landing"
        options={{ href: null, tabBarStyle: { display: "none" } }}
      />
      <Tabs.Screen
        name="signUp"
        options={{ href: null, tabBarStyle: { display: "none" } }}
      />
      <Tabs.Screen
        name="logIn"
        options={{ href: null, tabBarStyle: { display: "none" } }}
      />
      <Tabs.Screen name="index" options={{ href: null }} />
    </Tabs>
  );
}
