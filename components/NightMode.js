import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Button, AppState } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Colors } from "./styles";
import { ThemeContext } from "../contexts/ThemeContext";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [displayText, setDisplayText] = React.useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null); // Default to 23 (11 PM)
  const [selectedMinute, setSelectedMinute] = useState(null);
  const appState = React.useRef(AppState.currentState);
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  useEffect(() => {
    checkTimeAndSetPlaying();
  }, [selectedHour, selectedMinute]);

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
    if (selectedHour === null || selectedMinute === null) {
      setIsPlaying(false);
      setDisplayText("No time selected. Timer not started.");
      return;
    }
  
    const currentHour = new Date().getHours();
    const currentMinute = new Date().getMinutes();
  
    if (currentHour < selectedHour || (currentHour === selectedHour && currentMinute < selectedMinute)) {
      setIsPlaying(false);
      setDisplayText("It's not bedtime yet. Keep surfing!");
    } else if ((currentHour > selectedHour || (currentHour === selectedHour && currentMinute >= selectedMinute)) || currentHour < 4) { // selected PM to 4 AM
      setIsPlaying(true);
      setDisplayText("It's Bedtime! You have one minute to get off your phone.")
    } else {
      setIsPlaying(false);
      setDisplayText("It's not bedtime yet. Keep surfing!")
    }
  };

  const showDateTimePicker = () => {
    setShowPicker(true);
  };

  const hideDateTimePicker = () => {
    setShowPicker(false);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
    setSelectedMinute(currentDate.getMinutes());
    setSelectedHour(currentDate.getHours());
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
          <Button title="Set Bedtime" onPress={showDateTimePicker} />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
          style={{width: 300, opacity: 1, height: 30, marginTop: 50, color: activeColors.text}}
        />
      )}
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
