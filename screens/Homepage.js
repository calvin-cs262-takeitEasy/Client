import React, { useContext } from "react";
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
import { LineGraph } from "../components/LineGraph";
import Header from "../shared/header";
import Footer from "../shared/footer";

const Homepage = ({ navigation }) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = Colors[theme.mode]

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: activeColors.background,
      }}
    >
    <Header name="Home"/>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              color: activeColors.text,
            }}
          >
            Homepage
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text
            style={{
              color: activeColors.text,
            }}
          >
            Go To Settings
          </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
        <LineGraph />
      </View>
      <View style={{position: 'absolute', left: 0, right: 0, bottom: 0}}>
        <Footer page="Home"/>
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
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Homepage;
