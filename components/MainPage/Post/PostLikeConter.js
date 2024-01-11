import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const PostLikeCounter = (props) => {
  const { likeCount } = props;

  // Interesting new idea to distinguish text in text component
  return (
    <View style={s.postLikeCounterContainer}>
      <Text style={s.postLikeText}>
        {`This post has been liked `}
        <Text style={{ fontWeight: "bold", color: "red" }}>{likeCount}</Text>
        {` times`}
      </Text>
    </View>
  );
};
const s = StyleSheet.create({
  postLikeCounterContainer: {},
  postLikeText: {
    fontSize: 15,
    fontWeight: "400",
  },
});
