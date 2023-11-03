import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import Header from "../shared/header";
import React, { useContext } from "react";
import PropTypes from "prop-types";

import { useUser } from "../contexts/UserContext";

const Settings = ({ navigation }) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  const { currentUser, setCurrentUser } = useUser();

  const logout = () => {
    setCurrentUser({ username: "", ID: -1 });
    navigation.navigate("Login");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: activeColors.background,
      }}
    >
      <Header navigation={navigation} name="Settings" type="backButton" />
      <View style={{ justifyContent: "center", alignItems: "center", flex: 1 }}>
        <TouchableOpacity
          onPress={() => updateTheme()}
          style={{
            backgroundColor: activeColors.primary,
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 16,
              color: "#FFF",
            }}
          >
            {theme.mode === "dark" ? "Light Mode" : "Dark Mode"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => updateTheme({ system: true })}
          style={{
            backgroundColor: activeColors.primary,
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 16,
              color: "#FFF",
            }}
          >
            System Theme
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => logout()}
          style={{
            backgroundColor: activeColors.primary,
            padding: 20,
            borderRadius: 10,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "700",
              fontSize: 16,
              color: "#FFF",
            }}
          >
            Logout
          </Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

Settings.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Settings;
