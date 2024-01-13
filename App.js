import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { LogInScreen } from "./components/LogInScreen/LogInScreen";
import { TopMenu } from "./components/MainPage/TopMenu/TopMenu";
import { Story } from "./components/MainPage/Stories/Story";
import { Stories } from "./components/MainPage/Stories/Stories";
import { ProfilePicture } from "./components/MainPage/Post/ProfilePicture";
import { Dot } from "./components/MainPage/Post/OptionDot";
import { UserNick } from "./components/MainPage/Post/UserNick";
import { PostPhoto } from "./components/MainPage/Post/PostPhoto";
import { PostBottomButtons } from "./components/MainPage/Post/PostBottomButtons";
import { FullPost } from "./components/MainPage/Post/FullPost";
import { PostTop } from "./components/MainPage/Post/PostTop";
import { Dots } from "./components/MainPage/Post/OptionDots";
import { UserCountry } from "./components/MainPage/Post/UserCountry";
import { PostBottom } from "./components/MainPage/Post/PostBottom";
import { DotPostIndicators } from "./components/MainPage/Post/DotPostIndicators";
import { DotsPostIndicators } from "./components/MainPage/Post/DotsPostIndicators";
import { PostLists } from "./components/MainPage/Post/PostLists";
import { Separator } from "./components/MainPage/Post/Separator";
import { PostLikeCounter } from "./components/MainPage/Post/PostLikeConter";
import { LikeIcon } from "./components/MainPage/Post/LikeIcon";

// TODO!

// Strange space between separators. I set bigger post but separator doesnt take into account height of post

// Why I can't scroll posts completely to the end? // PostLists.js > flex:1 and paddingBottom:20 in contnet container style
// When I scroll I would like to hide TopMenu and Stories

// like counter black when equals 0
// switching colors of post when I click on dots bellow ( simulation of many images in one post )

export default function App() {
  return (
    <LinearGradient
      colors={["#edf8fb", "#edf7ff", "#eff6ff", "#faf3fa", "#ecfbf4"]}
      style={s.linearGradientContainer}
    >
      <SafeAreaView style={s.safeAreaViewContainer}>
        {/* <LogInScreen
          userData={"Username, email or mobile number"}
          userPassword={"Password"}
        /> */}

        <TopMenu />

        <View style={s.storiesContainer}>
          <Stories />
        </View>

        {/* <View style={s.topMenuContainer}>
          <FullPost />
        </View> */}

        <PostLists />
      </SafeAreaView>
    </LinearGradient>
  );
}

const s = StyleSheet.create({
  safeAreaViewContainer: {
    flex: 1,
  },

  linearGradientContainer: {
    flex: 1,
  },

  storiesContainer: {
    marginTop: 60,
  },

  topMenuContainer: {
    marginTop: 12,
  },
});
