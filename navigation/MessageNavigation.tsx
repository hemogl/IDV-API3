import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { FriendsStackParamList } from "../navigation/FriendsStackScreen";

type FriendsNavigationProp = NativeStackNavigationProp<
  FriendsStackParamList,
  "FriendsList"
>;

const navigation = useNavigation<FriendsNavigationProp>();

const goToChat = (friend: { id: string; name: string }) => {
  navigation.navigate("MessagePage", {
    friendId: friend.id,
    friendName: friend.name,
  });
};
