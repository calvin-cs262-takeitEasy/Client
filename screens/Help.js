import { SafeAreaView, StyleSheet, Text } from "react-native";
import PropTypes from "prop-types";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { React, useContext } from "react";
import Header from "../shared/header";
import Footer from "../shared/footer";

const Forgot = ({ navigation }) => {
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
        <Header navigation={navigation} name="Help" type="backButton" />
        
        <Text
          style={{
            color: activeColors.text,
          }}
        >
          Alarm:  {"\n"}
        Click on “Set Alarm” and set an alarm with the 24 hour clock.{"\n"}
        If you dont turn the alarm off within 30 seconds of it going off, we send a Comm to your friends! {"\n"}
        {"\n"}
        Study Timer: {"\n"}
        Click on the 00:00 to set Hours and Minutes for your timer, then click “Start Timer” when you are ready to start studying.{"\n"}
        If you leave the screen while the timer is going, we send a Comm to your friends!{"\n"}
        {"\n"}
        Bedtime Mode: {"\n"}
        Set a time for bedtime mode to start every night! {"\n"}
        You have one minute of grace time. If you go on your phone more than that while in bedtime mode, we send a Comm to your friends!{"\n"}

        </Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Forgot;
