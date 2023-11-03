import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Button, AppState } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Colors } from "./styles";
import { ThemeContext } from "../contexts/ThemeContext";
export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [displayText, setDisplayText] = React.useState('');
  const appState = React.useRef(AppState.currentState);
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];
  const handleAppStateChange = (nextAppState) => {
    if (
      appState.current.match(/inactive|background/) &&
      nextAppState === 'active'
    ) {
        checkTimeAndSetPlaying();
    } else {
      setIsPlaying(false);
    }
    appState.current = nextAppState;
  };
  const checkTimeAndSetPlaying = () => {
    const currentHour = new Date().getHours();
    if (currentHour >= 22 || currentHour < 6) { // 10 PM to 6 AM
      setIsPlaying(true);
      setDisplayText("It's Bedtime! You have one minute to get off your phone.")
    } else {
      setIsPlaying(false);
        setDisplayText("It's not bedtime yet. Keep surfing!")
    }
  };
  React.useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
    checkTimeAndSetPlaying();
    return () => {
        AppState.removeEventListener('change', handleAppStateChange);
      };
    }, []);
    return (
        <View style={styles.container}>
          <Text style={{ color: activeColors.Text, fontSize: 24 }}>{displayText}</Text>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={60}
            colors={activeColors.primary}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => ({ shouldRepeat: true, delay: 2 })}
            updateInterval={1}
          >
            {({ remainingTime }) => (
              <Text style={{ color:activeColors.Text, fontSize: 40 }}>
                {remainingTime}
              </Text>
            )}
          </CountdownCircleTimer>
        </View>
      );
    }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
  }
});