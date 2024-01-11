import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export const PostPhoto = () => {
  return <View style={s.postPhotoContainer} />;
};

const s = StyleSheet.create({
  postPhotoContainer: {
    aspectRatio: 4 / 4,
    backgroundColor: "grey",
  },
});
