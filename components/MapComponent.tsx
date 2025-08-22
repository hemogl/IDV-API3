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
import SwitchButton from "./blocks/Switch";

export default function MapComponent() {
  const [myLatitude, setMyLatitude] = useState(0);
  const [myLongitude, setMyLongitude] = useState(0);
  const [friendsList, setFriendsList] = useState<Friend[]>([]);
  const [isAsk, setIsAsk] = useState(false);
  const [isEnabled, setEnabled] = useState(true);

  useEffect(() => {
    async function loadLocation() {
      try {
        let location = await loadDefaultLocation();
        setMyLatitude(location.coords.latitude);
        setMyLongitude(location.coords.longitude);
      } catch (error) {
        console.error(error);
      }
    }
    loadLocation();
    setFriendsList(fakeFriends);
  }, []);

  const markers = transformMarker(fakeFriends);

  const onMarkerSelected = () => {
    setIsAsk(true);
    // go to chatbox
  };

  const Invite = () => {
    console.log("user id invited you to join");
  };

  const Message = () => {
    console.log("navigate to chatbox, friend id");
  };

  const RemoveFriend = () => {
    console.log("removed from friend");
  };

  if (Platform.OS === "web") {
    return (
      <View style={styles.loading}>
        <Text>La carte n'est pas disponible sur le web</Text>
      </View>
    );
  }

  if (!myLatitude && !myLongitude) {
    return (
      <View style={styles.container}>
        <Text> Map loading ...</Text>
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
          initialRegion={{
            latitude: myLatitude,
            longitude: myLongitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
        >
          {markers.map((marker, index) => (
            <Marker
              key={index}
              coordinate={marker}
              onPress={() => onMarkerSelected(marker)}
            />
          ))}
        </MapView>

        {isAsk && (
          <View style={styles.askContainer}>
            <TouchableOpacity onPress={Invite}>
              <Text style={styles.askButtonText}> Invite </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={Message}>
              <Text style={styles.askButtonText}> Message </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={RemoveFriend}>
              <Text style={styles.askButtonText}> Remove from friends </Text>
            </TouchableOpacity>
          </View>
        )}

        <View>
          <SwitchButton value={isEnabled} onToggle={setEnabled} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  menu: {
    position: "absolute",
    bottom: 20,
    left: 0,
    right: 0,
    paddingHorizontal: 10,
  },
  askContainer: {
    position: "absolute",
    top: 50,
    left: 30,
    backgroundColor: "rgba(151, 149, 149, 0.43)",
    padding: 10,
    borderRadius: 8,
    zIndex: 10, // <-- ça force le menu au-dessus
  },
  askButtonText: {
    color: "#000",
    fontSize: 16,
    marginVertical: 5,
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
