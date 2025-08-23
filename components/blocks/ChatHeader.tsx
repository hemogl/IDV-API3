import React, { useState } from "react";
import {
  StyleSheet,
  Dimensions,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Text,
  Image,
} from "react-native";

function ChatHeader({ name }: any) {
  const [friendName, setFriendName] = useState("");
  setFriendName(name);
  return (
    <SafeAreaView>
      <View style={styles.friendAvatar}>
        <Image
          alt=""
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
          }}
          style={styles.avatarImg}
        />
      </View>
      <Text> {friendName} </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  avatarImg: {
    width: 80,
    height: 80,
    borderRadius: 9999,
  },
  friendAvatar: {
    position: "relative",
  },
});

export default ChatHeader;
