import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { TopInstagramText } from "./TopInstagramText";
import { TopMenuIcon } from "./TopMenuIcon";

export const TopMenu = () => {
  return (
    <View style={s.topMenuContainer}>
      <View style={s.leftIconsContainer}>
        <TopMenuIcon />
      </View>

      <View style={s.topInstagramTextContainer}>{<TopInstagramText />}</View>

      <View style={s.rightIconsContainer}>
        <TopMenuIcon />
        <TopMenuIcon />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  topMenuContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: "#fafafa",
    height: 110,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: "grey",
    flexDirection: "row", // Make the children flex items in a row
    justifyContent: "space-between", // Spacing between the children
    alignItems: "center", // Center vertically
    paddingHorizontal: 18, // Add some padding for spacing
  },

  leftIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 46,
  },

  topInstagramTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 46,
    left: 24,
  },

  rightIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 46,
    gap: 10,
  },
});
