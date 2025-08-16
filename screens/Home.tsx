import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import { COLORS } from "../theme/colors";
import Friend from "../utils/FriendType";
import MapView from "react-native-maps";

export default function HomeScreen() {
  const [friendLatitude, setFriendLatitude] = useState("48.866667");
  const [friendLongitude, setFriendLongitude] = useState("2.333333");
  const [friendsList, setFriendsList] = useState<Friend[]>([]);

  const FriendsAPIUrl = `${process.env.EXPO_PUBLIC_API_URL}/friends`;
  const [region, setRegion] = useState({
    latitude: 48.866667,
    longitude: 2.333333,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const tokyoRegion = {
    latitude: 35.6762,
    longitude: 139.6503,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  const fetchFriends = async () => {
    try {
      const response = await fetch(FriendsAPIUrl);
      if (!response.ok) {
        throw new Error("Error when fetching user's friends list");
      }
      const json = await response.json();
      console.log("GET response was successful", json);
      setFriendsList(json);
    } catch (error) {
      console.error("GET request failed", error);
    }
    // MOCK DATA 🚀
    setFriendsList([
      {
        ID: "1",
        Name: "Alice",
        City: "Paris",
        Address: "Rue de Rivoli",
        Contacts: { email: "alice@mail.com", phone: "0600000000" },
      },
      {
        ID: "2",
        Name: "Bob",
        City: "Lyon",
        Address: "Place Bellecour",
        Contacts: { email: "bob@mail.com" },
      },
    ]);
  };

  useEffect(() => {
    fetchFriends();
  }, []);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={tokyoRegion}
        onRegionChangeComplete={(region) => setRegion(region)}
      ></MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light_grey,
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    marginVertical: 10,
  },
  map: {
    flex: 1,
    width: "100%",
    height: 400, // 👈 pour vérifier
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  city: {
    fontSize: 16,
    marginBottom: 2,
  },
  address: {
    fontSize: 14,
    marginBottom: 2,
    color: "gray",
  },
  contacts: {
    fontSize: 14,
  },
});
