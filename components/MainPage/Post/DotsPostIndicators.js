import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { DotPostIndicators } from "./DotPostIndicators";

export const DotsPostIndicators = (props) => {
  const { numberOfDots } = props;

  return (
    <View style={s.dotsPostIndicatorsContainer}>
      {Array(numberOfDots)
        .fill(null)
        .map((v, i) => {
          return (
            <DotPostIndicators
              width={props.width}
              height={props.height}
              key={i}
            />
          );
        })}
    </View>
  );
};

const s = StyleSheet.create({
  dotsPostIndicatorsContainer: {
    flexDirection: "row",
    gap: 3,
  },
});
