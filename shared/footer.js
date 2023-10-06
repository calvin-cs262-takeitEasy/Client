import React, { useContext } from "react";
import { View, Dimensions, TouchableOpacity } from "react-native";

import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";

import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Footer = ({ navigation, page }) => {

  const gohome = () => {
    navigation.navigate("Homepage");
  };

  const goalarm = () => {
    navigation.navigate("Alarm");
  };

  const gostudy = () => {
    navigation.navigate("Study");
  };

  const gobedtime = () => {
    navigation.navigate("Bedtime");
  };

  const goprofile = () => {
    navigation.navigate("Profile");
  };

  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  let homeColor,
    alarmColor,
    studyColor,
    sleepColor,
    profileColor = activeColors.backgroundAccent;
  if (page == "Home") {
    homeColor = activeColors.tertiary;
  } else if (page == "Alarm") {
    alarmColor = activeColors.tertiary;
  } else if (page == "Study") {
    studyColor = activeColors.tertiary;
  } else if (page == "Bedtime") {
    sleepColor = activeColors.tertiary;
  } else if (page == "Profile") {
    profileColor = activeColors.tertiary;
  }

  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: 60,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: activeColors.backgroundAccent,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
      }}
    >
      <View
        style={{
          backgroundColor: homeColor,
          width: 55,
          height: 55,
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginTop: 5,
        }}
      >
        <TouchableOpacity onPress={gohome}>
          <Ionicons name="home-outline" size={25} color={activeColors.text} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: alarmColor,
          width: 55,
          height: 55,
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginTop: 5,
        }}
      >
        <TouchableOpacity onPress={goalarm}>
          <MaterialCommunityIcons
            name="alarm"
            size={25}
            color={activeColors.text}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: studyColor,
          width: 55,
          height: 55,
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginTop: 5,
        }}
      >
        <TouchableOpacity onPress={gostudy}>          
          <Feather name="book" size={25} color={activeColors.text} />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: sleepColor,
          width: 55,
          height: 55,
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginTop: 5,
        }}
      >
        <TouchableOpacity onPress={gobedtime}>
          <MaterialCommunityIcons
            name="alarm-snooze"
            size={25}
            color={activeColors.text}
          />
        </TouchableOpacity>
      </View>

      <View
        style={{
          backgroundColor: profileColor,
          width: 55,
          height: 55,
          alignItems: "center",
          justifyContent: "center",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
          marginTop: 5,
        }}
      >
        <TouchableOpacity onPress={goprofile}>
          <AntDesign name="user" size={25} color={activeColors.text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Footer;
