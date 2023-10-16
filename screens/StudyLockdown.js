import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { React, useContext } from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const StudyLockdown = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  const timerComplete = () => {
    navigation.navigate("Study");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: activeColors.background,
      }}
    >
      <CountdownCircleTimer
        isPlaying
        isGrowing={true}
        duration={10}
        colors={activeColors.primary}
        size={250}
        strokeWidth={24}
        trailColor={activeColors.accent}
        onComplete={timerComplete}
      >
        {({ remainingTime }) => (
          <Text style={{ color: activeColors.text, fontSize: 50 }}>
            {Math.floor(remainingTime / 3600)}:
            {Math.floor((remainingTime % 3600) / 60)}:
            {remainingTime % 60}
          </Text>
        )}
      </CountdownCircleTimer>
    </SafeAreaView>
  );
};

export default StudyLockdown;
