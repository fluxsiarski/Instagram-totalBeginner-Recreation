import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { useState } from "react";
import { StateTextInputMonitor } from "../../hooks/StateTextInputMonitor";

export const KeyboardInput = (props) => {
  const { inputValue, handleChangeText } = StateTextInputMonitor(props);

  return (
    <TextInput
      style={s.apperance}
      placeholder={props.placeholder}
      value={inputValue}
      onChangeText={handleChangeText}
      secureTextEntry={props.isSecure}
      autoCapitalize="none"
    />
  );
};

const s = StyleSheet.create({
  apperance: {
    borderRadius: 8,
    borderColor: "grey",
    borderWidth: StyleSheet.hairlineWidth,
    paddingHorizontal: 12,
    paddingVertical: 16,
    marginHorizontal: 12,
    fontSize: 16,
    backgroundColor: "white",
  },
});
