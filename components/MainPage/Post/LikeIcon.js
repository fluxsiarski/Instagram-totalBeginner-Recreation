import { StyleSheet, Text, TouchableHighlight } from "react-native";

export const LikeIcon = (props) => {
  const { onPress } = props;

  return (
    <TouchableHighlight
      style={s.likeIconContainer}
      onPress={onPress}
      underlayColor={"transparent"}
    >
      <Text style={s.likeIconText}>♥️</Text>
    </TouchableHighlight>
  );
};

const s = StyleSheet.create({
  likeIconContainer: {
    flexDirection: "column",
    width: 35,
    height: 35,
    alignItems: "center",
    bottom: 3.5, // Could be better...
  },

  likeIconText: {
    fontSize: 33,
  },
});
