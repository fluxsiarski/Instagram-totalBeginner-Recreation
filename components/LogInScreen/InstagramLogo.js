import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";

export const InstagramLogo = () => {
  return (
    <View style={s.logoContainer}>
      <LinearGradient
        colors={["#FED373", "#F15245"]} // Define your gradient colors
        style={s.gradientBorder}
      >
        <View style={s.instagramLogo}>
          <View style={s.innerCircle} />
          <View style={s.innerDot} />
        </View>
      </LinearGradient>
    </View>
  );
};

const s = StyleSheet.create({
  logoContainer: {
    width: 75,
    height: 75,
    overflow: "hidden", // Clip the gradient outside the container
  },

  gradientBorder: {
    width: "100%",
    height: "100%",
    borderRadius: 12,
    borderWidth: 4,
    borderColor: "transparent", // Transparent border color
    justifyContent: "center",
    alignItems: "center",
  },

  instagramLogo: {
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    borderRadius: 8, // Adjust the inner circle border radius
    justifyContent: "center",
    alignItems: "center",
  },

  innerCircle: {
    width: 30,
    height: 30,
    backgroundColor: "transparent",
    borderRadius: 30,
    borderWidth: 4,
    borderColor: "#ec0f9e", // Transparent border color
  },

  innerDot: {
    width: 10,
    height: 10,
    backgroundColor: "#ec0f9e", // Transparent inner dot
    position: "absolute",
    top: 6,
    right: 8,
    borderRadius: 10,
  },
});
