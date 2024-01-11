import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { TextInput } from "react-native";
import { CreateNewAccountButton } from "./CreateNewAccountButton";

export const BottomLogInPart = () => {
  return (
    <View style={s.bottomLogInPart}>
      <CreateNewAccountButton />
      <View style={s.textContainer}>
        <Text style={s.text}>Meta</Text>
      </View>
    </View>
  );
};

const s = StyleSheet.create({
  bottomLogInPart: {
    gap: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },

  text: {
    fontWeight: "700",
    color: "grey",
  },
});
