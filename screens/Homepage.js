import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { LineGraph } from "../components/LineGraph";
import Notification from "../components/Notification";

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
      <View style={styles.container}>
        
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text
            style={{
              color: activeColors.primary,
            }}
          >
            Homepage
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => navigation.navigate("Settings")}>
          <Text
            style={{
              color: activeColors.primary,
            }}
          >
            Go To Settings
          </Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
        {/*<LineGraph />*/}
        <Notification text={'Test1'}/>
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
