import { React, useContext, useState } from "react";
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
import { useUser } from "../contexts/UserContext";

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
  const { currentUser, setCurrentUser } = useUser();

  const [userData, setUserData] = useState([]);

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
        <TouchableOpacity onPress={() => addFriend(item)}>
          <Item name={item.username} />
        </TouchableOpacity>
      );
    }
  };

  const addFriend = async (props) => {
    // console.log("add friend");
    console.log("Props: " + props.id);
    console.dir(props);

    // Get the current user's friends
    fetch("https://cs262-commit.azurewebsites.net/friends/" + currentUser.ID)
      // .then((test) => console.log(test))
      .then((response) => response.json())
      // .then((test) => console.log(test))
      .then((json) => setUserData(json))
      .catch((error) => console.error(error));

    console.log("User Data: " + userData);

    // Check if the user is already friends with the person
    if (userData.find((x) => x.friendsID === props.id)) {
      alert("You are already friends with " + props.username);
      return;
    }

    const data = {
      userID: currentUser.ID,
      friendsID: props.id,
    };

    console.log("Friend's ID: " + data.friendsID);
    console.log("User ID: " + data.userID);
    try {
      // Add the friend to the current user's friends
      const response = await fetch(
        "https://cs262-commit.azurewebsites.net/friends",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data,
          }),
        }
      );
    } catch (error) {
      console.error(error);
    }
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
