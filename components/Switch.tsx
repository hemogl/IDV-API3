import { View } from "react-native";
import React, { useState } from "react";
import ToggleSwitch from "toggle-switch-react-native";

const SwitchButton = () => {
  const [isSwitch, setSwitch] = useState(false);
  return (
    <View>
      <ToggleSwitch
        isOn={isSwitch}
        onToggle={(newState) => setSwitch(newState)}
        size="large"
        onColor="green"
        offColor="grey"
        label="Appear on map"
      />
    </View>
  );
};

export default SwitchButton;
