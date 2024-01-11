import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";

import { InstagramLogo } from "./InstagramLogo";
import { MiddleLogInPart } from "./MiddleLogInPart";
import { BottomLogInPart } from "./BottomLogInPart";

export const LogInScreen = (props) => {
  //
  return (
    <View style={s.logInScreenContainer}>
      <View style={s.instagramLogoContainer}>
        <InstagramLogo />
      </View>

      <View style={s.middleLogInPartContainer}>
        <MiddleLogInPart
          userData={props.userData}
          userPassword={props.userPassword}
        />
      </View>

      <View style={s.bottomLogInPartContainer}>
        <BottomLogInPart />
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  logInScreenContainer: {
    flex: 1,
    justifyContent: "space-between",
  },

  instagramLogoContainer: {
    flexDirection: "row",
    justifyContent: "center",
    top: 80,
  },

  middleLogInPartContainer: {},
  bottomLogInPartContainer: {},
});
