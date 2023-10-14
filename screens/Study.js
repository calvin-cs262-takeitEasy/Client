import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { React, useContext } from "react";
import PropTypes from "prop-types";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import Header from "../shared/header";
import Footer from "../shared/footer";

const Study = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  const studyLockdown = () => {
    navigation.navigate("StudyLockdown");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        //justifyContent: "center",
        alignItems: "center",
        backgroundColor: activeColors.background,
      }}
    >
      <Header navigation={navigation} name="Study" />

      {/*//ui here*/}
      <TouchableOpacity
        onPress={studyLockdown}
        style={{
          color: activeColors.primary,
          width: Dimensions.get("window").width - 20,
          height: 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: activeColors.text, fontSize: 25 }}>START TIMER</Text>
      </TouchableOpacity>

      <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Footer navigation={navigation} page="Study" />
      </View>
    </SafeAreaView>
  );
};

Study.propTypes = {
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

export default Study;
