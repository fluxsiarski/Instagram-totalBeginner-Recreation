import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useState } from "react";

export const TopMenuIcon = () => {
  const [click, setClick] = useState(0);

  const clickCounter = () => {
    let counter = click + 1;

    if (counter === 3) {
      setClick(0);
      alert("Nie umiem navigacji ;(");
    } else {
      setClick(counter);
    }
  };

  return (
    <TouchableOpacity onPress={clickCounter}>
      <View style={s.topMenuIconContainer} />
    </TouchableOpacity>
  );
};

const s = StyleSheet.create({
  topMenuIconContainer: {
    width: 32,
    height: 32,
    backgroundColor: "#343434",
    borderRadius: 10,
  },
});
