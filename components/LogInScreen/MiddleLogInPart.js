import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { LogInButton } from "./LogInButton";
import { KeyboardInput } from "./KeyboardInput";
import { useState } from "react";
import { SignIn, forgotPassword } from "./functions";

export const MiddleLogInPart = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={s.middlePart}>
      <KeyboardInput placeholder={props.userData} onChangeText={setUsername} />
      <KeyboardInput
        placeholder={props.userPassword}
        onChangeText={setPassword}
        isSecure={true}
      />
      <LogInButton onPress={() => SignIn(username, password)} />
      <TouchableOpacity style={s.textContainer} onPress={forgotPassword}>
        <Text style={s.text}>Forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
};

const s = StyleSheet.create({
  middlePart: {
    gap: 12,
  },

  textContainer: {
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "row",
  },

  text: {
    fontWeight: "500",
    color: "#202c33",
  },
});
