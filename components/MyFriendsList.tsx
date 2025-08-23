import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Image } from "react-native";
import Friend from "../utils/FriendType";
import { fakeFriends } from "../utils/fakeFriends";
import { useNavigation } from "@react-navigation/native";
import COLORS from "../theme/colors";

export default function FriendsList() {
  const [myFriends, setMyFriends] = useState<Friend[]>([]);
  const navigation = useNavigation();

  const goToChat = () => {
    navigation.navigate("MessageScreen");
  };
  /* 
  const getFriends = async () => {
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
        setMyFriends(data);
      } else {
        console.error("Erreur API:", response.status);
      }
    } catch (error) {
      console.error("Erreur réseau:", error);
    }
  };

  useEffect(() => {
    getFriends();
  }, []); */

  const renderItem = ({ item }: { item: Friend }) => {
    return (
      <View style={styles.containerFriend}>
        <TouchableOpacity onPress={goToChat}>
          <Image></Image>
          <Text style={styles.display}>{item.name}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={fakeFriends}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  containerFriend: {
    flex: 1,
    backgroundColor: "#fffefeff",
    borderRadius: 10,
    padding: 20,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: COLORS.light_grey,
    marginHorizontal: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  display: {
    fontSize: 24,
  },
});
