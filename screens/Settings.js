import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
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
      <View style={{ justifyContent: "flex-start", alignItems: "flex-start", flex: 1 }}>
        <View
          style={{
            paddingBottom: 20, 
            marginLeft: 10,
            paddingLeft: 10,
            paddingHorizontal: 10,
          }}
        />
        <TouchableOpacity
          onPress={() => updateTheme()}
          style={{
            backgroundColor: activeColors.primary,
            padding: 10,
            borderRadius: 10,
            marginBottom: 10,
            marginLeft: 15,
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
            padding: 10,
            borderRadius: 10,
            marginBottom: 7,
            marginLeft: 15,
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
        <View
            style={{
              backgroundColor: activeColors.background,
              width: Dimensions.get("window").width - 20,
              alignItems: "left",
              paddingHorizontal: 15,
              paddingTop: 10,
              marginLeft: 0,
            }}
          >
            <View
              style={{
                borderBottomColor: activeColors.tertiary,
                borderBottomWidth: 6,
                width: '40%',
                borderRadius: 4,
              }}
            />
            {/* Adjusted paddingBottom to give space between text and line */}
            <View
              style={{
                paddingBottom: 15, 
              }}
            />
          </View>
        <TouchableOpacity
          onPress={() => logout()}
          style={{
            backgroundColor: activeColors.deleteRed,
            padding: 10,
            borderRadius: 10,
            marginLeft: 15,
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
