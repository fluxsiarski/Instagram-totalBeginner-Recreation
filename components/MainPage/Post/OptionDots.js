import { StyleSheet, View } from "react-native";
import { Dot } from "./OptionDot";

export const Dots = (props) => {
  const { numberOfDots } = props;

  return (
    <View style={s.dotsContainer}>
      {Array(numberOfDots)
        .fill(null)
        .map((_, index) => {
          return <Dot key={index} />;
        })}
    </View>
  );
};

const s = StyleSheet.create({
  dotsContainer: {
    flexDirection: "row",
    gap: 4,
  },
});
