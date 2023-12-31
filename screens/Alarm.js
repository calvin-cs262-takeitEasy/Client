import {  SafeAreaView, 
          StyleSheet, 
          View, 
          LogBox,
        } from "react-native";
import Header from "../shared/header";
import Footer from "../shared/footer";
import PropTypes from "prop-types";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { React, useContext } from "react";
import AlarmClock from "../components/AlarmClock";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Alarm = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: activeColors.background,
      }}
    >
      <Header navigation={navigation} name="Alarm" />

      <AlarmClock />

      <View style={{ position: "absolute", left: 0, right: 0, bottom: -8}}>
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Alarm;
