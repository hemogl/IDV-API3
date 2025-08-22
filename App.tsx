import React from "react";
import { Image } from "react-native";
import MyFriends from "./screens/MyFriends";
import HomeScreen from "./screens/Home";
import ChatBox from "./screens/ChatBox";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
const Tab = createBottomTabNavigator();
const chatIcon = require("./assets/chat.png");

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "blue", // 👈 obligatoire
    background: "white",
    card: "white",
    text: "black",
    border: "gray",
    notification: "red",
  },
};
// BottomTab principal
function BottomTabNav() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue", // 👈 fixes "primary undefined"
        tabBarInactiveTintColor: "gray", // 👈 fallback color
      }}
    >
      <Tab.Screen
        name="Friends"
        component={MyFriends}
        options={{
          tabBarIcon: ({ color = "gray", size = 24 }) => (
            <Image
              source={require("./assets/chat.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color = "gray", size = 24 }) => (
            <Image
              source={require("./assets/chat.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ChatBox"
        component={ChatBox}
        options={{
          tabBarIcon: ({ color = "gray", size = 24 }) => (
            <Image
              source={require("./assets/chat.png")}
              style={{ width: size, height: size, tintColor: color }}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabNav />
    </NavigationContainer>
  );
}
