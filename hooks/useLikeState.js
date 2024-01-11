import { StyleSheet } from "react-native";
import { useState } from "react";

export const useLikeState = () => {
  const [likes, setLikes] = useState(0);

  function like() {
    setLikes(likes + 1);
    console.log(likes);
  }

  return {
    like,
    likes,
    setLikes,
  };
};

const s = StyleSheet.create({});
