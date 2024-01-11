import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export const Separator = () => {
  return (
    <View style={s.separatorContainer}>
      <View style={s.separator} />
    </View>
  );
};

const s = StyleSheet.create({
  separatorContainer: {
    width: "100%",
    height: 15,
    backgroundColor: "transparent",
    justifyContent: "center",
    // backgroundColor: "red",
  },

  separator: {
    // flexBasis: ,
    backgroundColor: "grey",
    height: StyleSheet.hairlineWidth,
  },
});
