import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { ProfilePicture } from "./ProfilePicture";
import { UserNick } from "./UserNick";
import { Dots } from "./OptionDots";
import { UserCountry } from "./UserCountry";

export const PostTop = (props) => {
  const { userNick, userCountry } = props;

  return (
    <View style={s.postTopContainer}>
      <View style={s.userDataContainer}>
        <ProfilePicture />
      </View>

      <View style={s.userInfoContainer}>
        <UserNick userNick={props.userNick} />
        <UserCountry userCountry={props.userCountry} />
      </View>

      <View style={s.dotContainer}>
        <Dots numberOfDots={3} />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  postTopContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 10,
  },
  userDataContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },

  dotContainer: {},

  userInfoContainer: {
    right: 112,
    gap: 4,
  },
});

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9];
