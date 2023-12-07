import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { React, useContext, useState, useEffect, useRef } from "react";
import {
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  AppState,
  LogBox,
  Dimensions,
} from "react-native";
import { Audio } from "expo-av";

import { useUser } from "../contexts/UserContext";

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const StudyLockdown = ({ route, navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];
  const { currentUser, setCurrentUser } = useUser();

  const { hour, minute } = route.params;
  let duration = hour * 3600 + minute * 60;
  if (duration == 0) duration = 5; // for testing and showcasing

  const [sound, setSound] = useState();

  async function playSound() {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/notification.wav")
    );
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  const timerComplete = () => {
    playSound();
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

  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    AppState.addEventListener("change", _handleAppStateChange);
    return () => {
      AppState.removeEventListener("change", _handleAppStateChange);
    };
  }, []);
  const createNotification = async () => {
    const data = {
      userID: currentUser.ID,
      type: "study_fail",
    };
    console.log("Creating Notif : " + data);
    response = await fetch(
      "https://cs262-commit.azurewebsites.net/notifications",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
  };

  const _handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactivebackground/) &&
      nextAppState === "active"
    ) {
      console.log("app has come to the foreground");
    }

    appState.current = nextAppState;
    setAppStateVisible(appState.current);

    console.log("AppState: ", appState.current);

    if (appState.current.match("inactive")) {
      createNotification();
    }
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
        onComplete={() => timerComplete()}
      >
        {({ remainingTime }) => (
          <Text style={{ color: activeColors.text, fontSize: 50 }}>
            {getTime(remainingTime)}
          </Text>
        )}
      </CountdownCircleTimer>

      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{
          backgroundColor: activeColors.deleteRed,
          width: Dimensions.get("window").width - 250,
          height: 50,
          borderRadius: 5,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <Text style={{ color: "#FFF", fontSize: 16 }}>Exit Study timer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default StudyLockdown;
