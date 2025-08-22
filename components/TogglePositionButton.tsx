import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Switch } from "react-native-paper";

const SwitchButton = ({ value, onToggle }: any) => {
  return (
    <View style={styles.button}>
      <Switch value={value} onValueChange={onToggle}></Switch>;
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    bottom: 30,
    left: 30,
    position: "absolute",
  },
});

export default SwitchButton;
