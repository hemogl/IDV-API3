import React from "react";
import { StyleSheet, View, Image } from "react-native";

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/eleven-splash-screen.png")}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 1000, // adapte à la taille de ton image
    height: 1000,
    resizeMode: "contain",
  },
});

export default SplashScreen;
