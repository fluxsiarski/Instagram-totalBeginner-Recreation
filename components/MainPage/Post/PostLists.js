import { FlatList, StyleSheet, View } from "react-native";
import { FullPost } from "./FullPost";
import { Separator } from "./Separator";

export const PostLists = () => {
  return (
    <View style={s.postListsContainer}>
      <FlatList
        keyExtractor={(item, index) => item.id.toString()}
        data={data}
        contentContainerStyle={{ paddingBottom: 115 }}
        style={{ marginTop: 12 }}
        ItemSeparatorComponent={Separator}
        renderItem={({ item }) => {
          return (
            <FullPost userNick={item.userNick} userCountry={item.userCountry} />
          );
        }}
      />
    </View>
  );
};

const s = StyleSheet.create({
  postListsContainer: {
    // padding:20
    // flex: 1,
  },
});

const data = [
  { id: "1", userNick: "John Doe", userCountry: "United States" },
  { id: "2", userNick: "Alice Smith", userCountry: "Canada" },
  { id: "3", userNick: "Maria Garcia", userCountry: "Spain" },
  { id: "4", userNick: "David Lee", userCountry: "United Kingdom" },
  { id: "5", userNick: "Emily Davis", userCountry: "Australia" },
  { id: "6", userNick: "Juan Rodriguez", userCountry: "Mexico" }, // Strange situation, name is too wide and hide profile picture
  { id: "7", userNick: "Sofia Kim", userCountry: "South Korea" },
  { id: "8", userNick: "Ahmed Ali", userCountry: "Egypt" },
  { id: "9", userNick: "Anna Müller", userCountry: "Germany" },
  { id: "10", userNick: "Marco Rossi", userCountry: "Italy" },
];
