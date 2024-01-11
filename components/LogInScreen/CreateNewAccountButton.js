import { StyleSheet, Text, TouchableOpacity } from "react-native";

export const CreateNewAccountButton = () => {
  return (
    <TouchableOpacity style={s.logInButtonContainer}>
      <Text style={s.logInText}>Create new account</Text>
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  logInButtonContainer: {
    flexDirection: "row",
    backgroundColor: "transparent",
    marginHorizontal: 12,
    paddingVertical: 16,
    borderRadius: 40,
    justifyContent: "center",
    borderWidth: 0.5,
    borderColor: "blue",
  },

  logInText: {
    color: "blue",
    fontWeight: "700",
  },
});
