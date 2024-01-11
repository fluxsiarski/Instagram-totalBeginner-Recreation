import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { TextInput } from "react-native";

export const LogInButton = (props) => {
  return (
    <TouchableOpacity style={s.logInButtonContainer} onPress={props.onPress}>
      <Text style={s.logInText}>Log in</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  logInButtonContainer: {
    flexDirection: "row",
    backgroundColor: "#0064e1",
    marginHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 40,
    justifyContent: "center",
  },

  logInText: {
    color: "white",
    fontWeight: "700",
  },
});
