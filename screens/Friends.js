import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from "react-native";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { React, useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { SearchBar } from "../components/SearchBar";
import List from "../components/List";
import Header from "../shared/header";

const Friends = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      fetch("https://cs262-commit.azurewebsites.net/username")
        .then((response) => response.json())
        .then((json) => setData(json))
        .catch((error) => console.error(error));
    };
    getData();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: activeColors.background,
      }}
    >
      <Header navigation={navigation} name="Friends" type="backButton" />

      <View>
        <SearchBar
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
          clicked={clicked}
          setClicked={setClicked}
        />
        {/* below this in the {} shows the list of the data, but when it does that it fills the screen. but if you dont have this, 
          the answer to the searched thing doesnt come up. im working on getting it so it doesnt show up the list, 
          but when you search the full thing, the answer does come up */}
        {!data ? (
          <ActivityIndicator size="large" />
        ) : (
          <List
            searchPhrase={searchPhrase}
            data={data}
            setClicked={setClicked}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

Friends.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Friends;
