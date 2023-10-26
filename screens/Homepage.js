import React, { useContext, useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
} from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import Header from "../shared/header";
import Footer from "../shared/footer";
import Notification from "../components/Notification";
import { useNavigation } from "@react-navigation/native";

import Notif from "../json/Notif.json";
import UserAccount from "../json/UserAccount.json";

const Homepage = () => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: activeColors.background,
      }}
    >
      <Header navigation={navigation} name="Home" type="withFriends" />
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View
          style={{
            backgroundColor: activeColors.backgroundAccent,
            width: Dimensions.get("window").width,
            alignItems: "center",
          }}
        >
          <FlatList
            data={Notif} // currently using all notifications
            renderItem={({ item }) => (
              <Notification
                name={item.ID} // currently only showing ID
                username={UserAccount.find((x) => x.ID === item.userID).username}
                Text={item.type}
              />
            )}
          />
        </View>
      </View>
      <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Homepage;
