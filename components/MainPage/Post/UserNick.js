import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export const UserNick = ({ userNick }) => {
  return <Text style={s.UserNickContainer}>{userNick}</Text>;
};

const s = StyleSheet.create({
  UserNickContainer: {
    fontSize: 17,
    fontWeight: "500",
  },
});
