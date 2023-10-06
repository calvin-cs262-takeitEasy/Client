import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Header from "../shared/header";
import Footer from "../shared/footer";
import PropTypes from "prop-types";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { React, useContext } from "react";

const Alarm = ({ navigation }) => {
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
      <Header navigation={navigation} name="Alarm" />
      <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
        <Text
          style={{
            color: activeColors.text,
          }}
        >
          Alarm
        </Text>
      </TouchableOpacity>
      <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Footer navigation={navigation} page="Alarm" />
      </View>
    </SafeAreaView>
  );
};

Alarm.propTypes = {
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

export default Alarm;
