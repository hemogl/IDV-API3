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
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";

function InputMessage() {
  const [text, onChangeText] = React.useState("Text your friend something!");
  return (
    <View style={styles.inputContainer}>
      <Image source={require("./assets/plus.png")} />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Text your friend something!"
        keyboardType="numeric"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default InputMessage;
