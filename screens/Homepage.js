import React, { useContext, useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  LogBox,
  Text,
} from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import Header from "../shared/header";
import Footer from "../shared/footer";
import Notification from "../components/Notification";
import { useNavigation } from "@react-navigation/native";

import { useUser } from "../contexts/UserContext";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

const Homepage = () => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];
  const navigation = useNavigation();
  const { currentUser, setCurrentUser } = useUser();

  const [notifData, setNotifData] = useState([]);
  useEffect(() => {
    fetch(
      "https://cs262-commit.azurewebsites.net/notifications/friends/" +
        currentUser.ID
    )
      .then((response) => response.json())
      .then((json) => setNotifData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: activeColors.background,
      }}
    >
      <Header navigation={navigation} name="Home" type="withFriends" />
      <View style={{ flex: 1, alignItems: "center" }}>
        <StatusBar style="auto" />
        <View
          style={{
            backgroundColor: activeColors.background,
            width: Dimensions.get("window").width,
            alignItems: "center",
          }}
        ></View>
        <FlatList
          data={notifData}
          ListHeaderComponent={() => (
            <View
              style={{
                backgroundColor: activeColors.background,
                width: Dimensions.get("window").width - 20,
                alignItems: "left",
                paddingHorizontal: 15,
                paddingTop: 10,
              }}
            >
              <Text style={{ color: activeColors.text, fontSize: 35, marginBottom: 5 }}>Comms</Text>
              <View
                style={{
                  borderBottomColor: activeColors.tertiary,
                  borderBottomWidth: 6,
                  width: '60%',
                  borderRadius: 3,
                }}
              />
              {/* Adjusted paddingBottom to give space between text and line */}
              <View
                style={{
                  paddingBottom: 7, 
                }}
              />
            </View>
          )}
          renderItem={({ item }) => (
            <Notification
              name={item.name}
              username={item.username}
              Text={item.type}
              id={item.id}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
      <View
              style={{
                backgroundColor: activeColors.background,
                width: Dimensions.get("window").width - 20,
                alignItems: "left",
                paddingHorizontal: 0,
                paddingTop: 50,
              }}
      ></View>
      <View style={{ position: "absolute", left: 0, right: 0, bottom: -8}}>
        <Footer navigation={navigation} page="Home" />
      </View>
    </SafeAreaView>
  );
};

Homepage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Homepage;
