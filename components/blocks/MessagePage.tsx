import React from "react";
import { View, Image } from "react-native";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import InputMessage from "./inputMessage";

function MessagePage() {
  return (
    <View>
      <ChatHeader name="Auriane"></ChatHeader>
      <MessageList></MessageList>
      <InputMessage></InputMessage>
    </View>
  );
}

export default MessagePage;
