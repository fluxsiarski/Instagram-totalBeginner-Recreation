import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export const Dot = () => {
  return <View style={s.dotContainer} />;
};

const s = StyleSheet.create({
  dotContainer: {
    width: 8,
    height: 8,
    backgroundColor: "grey",
    borderRadius: 8,
  },
});
