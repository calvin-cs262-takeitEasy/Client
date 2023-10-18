import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { React, useContext } from "react";

const Forgot = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: activeColors.background,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            color: activeColors.text,
          }}
        >
          Forgot
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

Forgot.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Forgot;
