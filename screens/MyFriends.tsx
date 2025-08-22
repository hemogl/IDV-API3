import { StyleSheet, View, Text, FlatList, ScrollView } from "react-native";
import React from "react";
import FriendsList from "../components/MyFriendsList";
import SwitchButton from "../components/Switch";

export default function FriendsView() {
  return (
    <View style={styles.container}>
      <FriendsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffcfcff",
  },
});
