import COLORS from "../theme/colors.js";
import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  Pressable,
  Alert,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Friend from "../utils/FriendType";
import { fakeFriends } from "../utils/fakeFriends";
import { transformMarker } from "../utils/transformMarker";
import { loadDefaultLocation } from "../utils/location";
import Switch from "./TogglePositionButton";

export default function MapComponent() {
  const [friendsList, setFriendsList] = useState<Friend[]>([]);
  const [isAsk, setIsAsk] = useState(false);
  const [isEnabled, setEnabled] = useState(false);
  const [defaultCoords, setDefaultCoords] =
    useState<Location.LocationObjectCoords>();

  const showPossibilites = () => {
    setIsAsk(!isAsk);
  };

  const paris = {
    latitude: 48.8479003,
    longitude: 2.2861294,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };
  const markers = transformMarker(friendsList);

  const onMarkerSelected = (marker: any) => {
    Alert.alert(marker.name);
  };
  /*  const fetchFriends = async () => {
    try {
      const backendURL = "/user?id=/friends";
      const response = await fetch(backendURL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setFriendsList(data);
      } else {
        console.error("Erreur API:", response.status);
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
    }
  }; */

  const sendFlowers = () => {
    console.log("send flowers");
  };

  const Message = () => {
    console.log("navigate to chatbox, friend id");
  };

  const RemoveFriend = () => {
    console.log("removed from friend");
  };

  useEffect(() => {
    /*  fetchFriends(); */
    async function loadLocation() {
      try {
        let location = await loadDefaultLocation();
        setDefaultCoords(location.coords);
      } catch (error) {
        console.error(error);
      }
    }
    loadLocation();
    setFriendsList(fakeFriends);
  }, []);

  if (Platform.OS === "web") {
    return (
      <View style={styles.loading}>
        <Text>La carte n'est pas disponible sur le web</Text>
      </View>
    );
  }

  if (!paris) {
    return (
      <View style={styles.container}>
        <Text>Chargement de la position...</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <MapView
          provider={PROVIDER_GOOGLE}
          showsUserLocation={isEnabled}
          showsMyLocationButton
          style={styles.map}
          initialRegion={paris}
        >
          {markers.map((marker, index) => (
            <Pressable onPress={showPossibilites}>
              <Marker
                key={index}
                coordinate={marker}
                onPress={() => onMarkerSelected(marker)}
              />
            </Pressable>
          ))}
        </MapView>
        {isAsk && (
          <View style={styles.ask}>
            <TouchableOpacity onPress={sendFlowers}>
              <Text style={styles.ask}> Send flowers </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Message}>
              <Text style={styles.ask}> Message </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={RemoveFriend}>
              <Text style={styles.ask}> Remove from friends </Text>
            </TouchableOpacity>
          </View>
        )}
        <Switch value={isEnabled} onToggle={setEnabled} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menu: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  ask: {
    position: "absolute",
    top: 30,
    bottom: 30,
    left: 30,
    right: 30,
    backgroundColor: "rgba(112, 112, 112, 0.19)",
  },
  categoryButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginRight: 10,
  },
  categoryButtonSelected: {
    backgroundColor: "green",
  },
  icon: {
    fontSize: 20,
    marginRight: 5,
  },
  label: {
    fontSize: 14,
    color: "#000",
  },
  loading: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
