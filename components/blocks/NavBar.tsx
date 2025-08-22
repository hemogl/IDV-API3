import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import MyFriends from "../../screens/MyFriends";
import ChatBox from "../../screens/ChatBox";

export default function BottomTab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen name="Friends" component={MyFriends} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={ChatBox} />
    </Tab.Navigator>
  );
}
