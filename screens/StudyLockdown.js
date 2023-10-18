import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { React, useContext } from "react";
import { SafeAreaView, Text } from "react-native";

const StudyLockdown = ({ route, navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  const { hour, minute } = route.params;
  const duration = hour * 3600 + minute * 60;

  const timerComplete = () => {
    navigation.navigate("Study");
  };

  const getTime = (remainingTime) => {
    const hours = Math.floor(remainingTime / 3600);
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    let minutesStr = minutes.toString();
    let secondsStr = seconds.toString();

    if (minutes < 10) {
      minutesStr = "0" + minutes.toString();
    }
    if (seconds < 10) {
      secondsStr = "0" + seconds.toString();
    }

    return hours.toString() + ":" + minutesStr + ":" + secondsStr;
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
        duration={duration}
        colors={activeColors.primary}
        size={250}
        strokeWidth={24}
        trailColor={activeColors.accent}
        onComplete={timerComplete}
      >
        {({ remainingTime }) => (
          <Text style={{ color: activeColors.text, fontSize: 50 }}>
            {getTime(remainingTime)}
          </Text>
        )}
      </CountdownCircleTimer>
    </SafeAreaView>
  );
};

export default StudyLockdown;
