import React from "react";
import { View, SafeAreaView } from "react-native";
import HomeScreen from "./screens/Home";
import BottomTab from "./components/NavBar";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <BottomTab />
        <View>
          <HomeScreen />
        </View>
      </SafeAreaView>
    </NavigationContainer>
  );
}
