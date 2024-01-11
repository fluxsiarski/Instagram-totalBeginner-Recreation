import { StyleSheet, View } from "react-native";
import { PostBottomButtons } from "./PostBottomButtons";
import { DotsPostIndicators } from "./DotsPostIndicators";
import { LikeIcon } from "./LikeIcon";

export const PostBottom = (props) => {
  const { onLikePress } = props;

  return (
    <View style={s.postBottomContainer}>
      <View style={s.leftButtonsContainer}>
        <LikeIcon onPress={onLikePress} style={{ bottom: 30 }} />
        <PostBottomButtons />
        <PostBottomButtons />
      </View>

      <View style={s.dotsPostIndicatorsContainer}>
        <DotsPostIndicators numberOfDots={3} width={8} height={8} />
      </View>

      <View style={s.rigthButtonContainer}>
        <PostBottomButtons />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  postBottomContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center",
  },

  leftButtonsContainer: {
    flexDirection: "row",
    gap: 15,
  },

  rigthButtonContainer: {
    flexDirection: "row",
  },

  dotsPostIndicatorsContainer: {
    right: 24,
  },

  postLikeCounterContainer: {
    flexDirection: "column",
  },
});
