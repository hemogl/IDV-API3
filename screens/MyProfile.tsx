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
import SwitchButton from "../components/blocks/Switch";

export default function MyProfile() {
  const [isSwitchOn, setIsSwitchOn] = useState(true);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.profileTop}>
            <View style={styles.avatar}>
              <Image
                alt=""
                source={{
                  uri: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80",
                }}
                style={styles.avatarImg}
              />
              {isSwitchOn && <View style={styles.avatarNotification} />}
            </View>

            <View style={styles.profileBody}>
              <Text style={styles.profileTitle}>{"Nickolas\nMiller"}</Text>
              <Text style={styles.profileSubtitle}>
                UI/UX Designer
                {" · "}
                <Text style={{ color: "#266EF1" }}>@nickmiller</Text>
              </Text>
            </View>
          </View>

          <Text style={styles.profileDescription}>
            Skilled in user research, wireframing, prototyping, and
            collaborating with cross-functional teams.
          </Text>
        </View>
      </View>
      <View style={styles.switch}>
        <Text> Set visibility </Text>
        <SwitchButton value={isSwitchOn} onToggle={setIsSwitchOn} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
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
  avatarNotification: {
    position: "absolute",
    borderRadius: 9999,
    borderWidth: 2,
    borderColor: "#fff",
    bottom: 0,
    right: -2,
    width: 21,
    height: 21,
    backgroundColor: "#22C55E",
  },
  /** Stats */
  stats: {
    backgroundColor: "#fff",
    flexDirection: "row",
    padding: 20,
    borderRadius: 12,
    shadowColor: "#90a0ca",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 1,
  },
  switch: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 60,
  },
});
