import React from "react";
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
import SwitchButton from "./Switch";

export default function MyProfile({ userName, userInstagram, userDescription}: any) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View>
        <Image
          alt=""
          source={{
            uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
          }}
          style={styles.avatarImg}
        />

         <View style={styles.profileBody}>
        <Text style={styles.profileTitle}>{userName}</Text>
        <Text style={{ color: "#266EF1" }}> {userInstagram}</Text>
         </View>

          <Text style={styles.profileDescription}> {userDescription} </Text>
      </View>
        <SwitchButton></SwitchButton>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  /** Header */
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderBottomWidth: 1,
    borderColor: "#e3e3e3",
  },
  headerAction: {
    width: 40,
    alignItems: "flex-start",
    justifyContent: "center",
  },
  /** Search */
  search: {
    position: "relative",
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    backgroundColor: "#F0F0F0",
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  searchIcon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    width: 34,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 2,
  },
  searchControl: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    paddingLeft: 34,
    width: "100%",
    fontSize: 16,
    fontWeight: "500",
  },
  /** Content */
  content: {
    paddingTop: 12,
    paddingHorizontal: 24,
  },
  contentActions: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 18,
    marginHorizontal: -6,
    marginBottom: 0,
  },
  /** Profile */
  profile: {
    paddingTop: 4,
    paddingBottom: 16,
  },
  profileTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    marginBottom: 16,
  },
  profileBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    paddingLeft: 16,
  },
  profileTitle: {
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 32,
    color: "#121a26",
    marginBottom: 6,
  },
  profileSubtitle: {
    fontSize: 15,
    fontWeight: "600",
    color: "#778599",
  },
  profileDescription: {
    fontSize: 14,
    fontWeight: "500",
    lineHeight: 18,
    color: "#778599",
  },
  profileTags: {
    marginTop: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  profileTagsItem: {
    fontSize: 14,
    fontWeight: "600",
    lineHeight: 18,
    color: "#266ef1",
    marginRight: 4,
  },
  /** Avatar */
  avatar: {
    position: "relative",
  },
  avatarImg: {
    width: 80,
    height: 80,
    borderRadius: 9999,
  },
