import { FlatList, StyleSheet } from "react-native";
import { Story } from "./Story";

export const Stories = () => {
  return (
    <FlatList
      horizontal
      contentContainerStyle={s.storiesContainer}
      style={s.storiesStyle}
      showsHorizontalScrollIndicator={false}
      data={data}
      keyExtractor={(item, index) => item.id.toString()}
      renderItem={({ item }) => {
        return <Story name={item.userNick} />;
      }}
    />
  );
};

const s = StyleSheet.create({
  storiesContainer: {
    gap: 23,
    marginBottom: 8,
  },

  storiesStyle: {
    borderBottomColor: "grey",
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginBottom: -12,
    backgroundColor: "purple",
  },
});

const data = [
  { id: "1", userNick: "Michael Johnson" },
  { id: "2", userNick: "Sophia Smith" },
  { id: "3", userNick: "Luis Martinez" },
  { id: "4", userNick: "Olivia Wilson" },
  { id: "5", userNick: "Daniel Brown" },
  { id: "6", userNick: "Mia Davis" },
  { id: "7", userNick: "David Kim" },
  { id: "8", userNick: "Ahmed Ali" },
  { id: "9", userNick: "Elena Müller" },
  { id: "10", userNick: "Luca Rossi" },
];
