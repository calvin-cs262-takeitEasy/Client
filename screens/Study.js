import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  AppState,
  LogBox,
} from "react-native";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { React, useContext, useState, Component, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import RNPickerSelect from "react-native-picker-select";
import Header from "../shared/header";
import Footer from "../shared/footer";

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();//Ignore all log notifications

const Study = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");

  const studyLockdown = () => {
    navigation.navigate("StudyLockdown", {
      hour: selectedHour,
      minute: selectedMinute,
    });
  };

  const hourOptions = Array.from({ length: 24 }, (_, i) => ({
    label: i.toString().padStart(2, "0"),
    value: i.toString().padStart(2, "0"),
  }));

  const minuteOptions = Array.from({ length: 60 }, (_, i) => ({
    label: i.toString().padStart(2, "0"),
    value: i.toString().padStart(2, "0"),
  }));

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: "center",
        backgroundColor: activeColors.background,
      }}
    >
      <Header navigation={navigation} name="Study" />

      {/* // UI here */}
      <View
        style={{
          flexDirection: "row",
          borderWidth: 0,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 5,
          padding: 5,
          margin: 10,
          marginTop: 100,
          marginBottom:0,
        }}
      >
        <RNPickerSelect
          onValueChange={(value) => setSelectedHour(value)}
          items={hourOptions}
          value={selectedHour}
          placeholder={{ label: "hr", value: null }}
          style={{
            inputIOS: {
              fontSize: 64,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 0,
              borderRadius: 4,
              color: activeColors.text,
              paddingRight: 30,
              marginBottom: 10,
            },
            inputAndroid: {
              fontSize: 64,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 0,
              borderRadius: 8,
              color: activeColors.text,
              paddingRight: 30,
              marginBottom: 10,
            },
          }}
        />

        {/* Display hours */}
        <Text
          style={{
            fontSize: 40, // Adjusted font size
            marginRight: 0, // Adjusted margin
            marginLeft: -25,
            marginBottom: 10,
            color: activeColors.text,
          }}
        >
          hr
        </Text>

        <RNPickerSelect
          onValueChange={(value) => setSelectedMinute(value)}
          items={minuteOptions}
          value={selectedMinute}
          placeholder={{ label: "min", value: null }}
          style={{
            inputIOS: {
              fontSize: 64,
              paddingVertical: 12,
              paddingHorizontal: 10,
              borderWidth: 0,
              borderRadius: 4,
              color: activeColors.text,
              marginBottom: 10,
            },
            inputAndroid: {
              fontSize: 64,
              paddingHorizontal: 10,
              paddingVertical: 8,
              borderWidth: 0,
              borderRadius: 8,
              color: activeColors.text,
              paddingRight: 30,
              marginBottom: 10,
            },
          }}
        />

        {/* Display minutes */}
        <Text
          style={{
            fontSize: 40, 
            marginRight:15,
            marginLeft: -5,
            marginBottom: 10,
            color: activeColors.text,
          }}
        >
          min
        </Text>
      </View>

      <TouchableOpacity
        onPress={studyLockdown}
        style={{
          backgroundColor: activeColors.primary,
          width: Dimensions.get("window").width - 50,
          height: 100,
          borderRadius: 10,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 35 }}>START TIMER</Text>
      </TouchableOpacity>

      <View style={{ position: "absolute", left: 0, right: 0, bottom: -8 }}>
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

Study.propTypes = {
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

export default Study;
