import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";

export const UserCountry = ({ userCountry }) => {
  return <Text style={s.UserNickContainer}>{userCountry}</Text>;
};

const s = StyleSheet.create({
  UserNickContainer: {
    fontSize: 13,
    fontWeight: "500",
  },
});
