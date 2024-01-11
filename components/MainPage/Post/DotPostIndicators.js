import { StyleSheet, View } from "react-native";

export const DotPostIndicators = ({ width, height }) => {
  return (
    <View
      style={[s.dotPostIndicatorsContainer, { width: width, height: height }]}
    />
  );
};

const s = StyleSheet.create({
  dotPostIndicatorsContainer: {
    backgroundColor: "blue",
    borderRadius: 9,
  },
});
