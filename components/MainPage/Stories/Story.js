import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export const Story = ({ name }) => {
  return (
    <View style={s.storyContainer}>
      <View style={s.storyCircle} />
      <Text style={s.storyText}>{name}</Text>
    </View>
  );
};

const s = StyleSheet.create({
  storyContainer: {
    alignItems: "center",
    gap: 6,
  },
  storyCircle: {
    width: 60,
    height: 60,
    backgroundColor: "grey",
    borderRadius: 60,
  },

  storyText: {
    fontSize: 15,
  },
});
