import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export const ProfilePicture = () => {
  return <View style={s.profilePictureContainer} />;
};

const s = StyleSheet.create({
  profilePictureContainer: {
    width: 45,
    height: 45,
    backgroundColor: "grey",
    borderRadius: 45,
  },
});
