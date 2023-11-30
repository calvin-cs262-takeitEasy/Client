import { React, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { ThemeContext } from "../contexts/ThemeContext";
import { Colors } from "../components/styles";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];
  return (
    <View style={styles.item}>
      <Text style={(styles.title, { color: activeColors.text })}>{name}</Text>
    </View>
  );
};

// the filter
const List = ({ searchPhrase, setClicked, data }) => {
  const RenderItem = ({ item }) => {
    // when no input, show all
    if (searchPhrase === "") {
      return;
    }
    // filter of the name
    if (
      item.username
        .toUpperCase()
        .includes(searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
    ) {
      return (
        <TouchableOpacity onPress={addFriend(item)}>
          <Item name={item.username} />
        </TouchableOpacity>
      );
    }
  };

  const addFriend = (props) => {
    console.log("add friend");
    console.log(props);
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          setClicked(false);
        }}
      >
        <FlatList
          data={data}
          renderItem={RenderItem}
          keyExtractor={(item) => item.ID}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    margin: 10,
    height: "85%",
    width: "100%",
  },
  item: {
    margin: 30,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
});
