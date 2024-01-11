import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export const TopInstagramText = () => {
  return <Text style={s.topInstagramTextContainer}>INSTAGRAM</Text>;
};

const s = StyleSheet.create({
  topInstagramTextContainer: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
