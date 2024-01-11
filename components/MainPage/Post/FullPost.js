import { StyleSheet, View } from "react-native";
import { useState } from "react";
import { PostBottom, PostPhoto } from "./index";
import { PostTop } from "./PostTop";
import { PostLikeCounter } from "./PostLikeConter";

export const FullPost = (props) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikePress = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <View style={s.fullPostContainer}>
      <View style={s.postBorder}>
        <PostTop userNick={props.userNick} userCountry={props.userCountry} />
        <PostPhoto />
        <PostBottom onLikePress={handleLikePress} />

        <View style={s.postLikeCounterContainer}>
          <PostLikeCounter likeCount={likeCount} />
        </View>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  fullPostContainer: {
    flexBasis: 600,
    backgroundColor: "red",
    // borderColor: "#CAC2C2",
  },

  postBorder: {
    marginTop: 10,
    gap: 8,
  },

  postLikeCounterContainer: {
    marginHorizontal: 12,
    marginTop: 6,
  },
});
