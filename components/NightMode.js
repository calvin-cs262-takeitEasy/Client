import React, { useState, useEffect, useContext } from 'react';
import { Text, View, StyleSheet, Button, AppState } from 'react-native';
import Constants from 'expo-constants';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';

import { Colors } from "./styles";
import { ThemeContext } from "../contexts/ThemeContext";
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function App() {
  const [isPlaying, setIsPlaying] = React.useState(true)
  const [displayText, setDisplayText] = React.useState('');
  const [showPicker, setShowPicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(null); // Default to 23 (11 PM)
  const [selectedMinute, setSelectedMinute] = useState(null);
  const appState = React.useRef(AppState.currentState);
  const [isBedtime, setIsBedtime] = useState(false);
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  useEffect(() => {
    if (selectedHour === null || selectedMinute === null) {
      setShowPicker(true);
    } else {
      const isItBedtime = checkIfBedtime(selectedHour, selectedMinute);
      setIsBedtime(isItBedtime);
      if (isItBedtime) {
        setIsPlaying(true);
      } else {
        setIsPlaying(false);
      }
    }
  }, [selectedHour, selectedMinute]);

  useEffect(() => {
    console.log(`isPlaying is now ${isPlaying}`);
  }, [isPlaying]);

  /*
  Logs the apps state,
  checks whether active or inactive
  and then checks if it is bedtime, if so it sets the isPlaying state to true
  updates the apps state.
  */
  const handleAppStateChange = async (nextAppState) => {
    console.log(`App has gone ${nextAppState}`);
    if (appState.current === 'active' && nextAppState.match(/inactive|background/)) {
      if (checkIfBedtime(selectedHour, selectedMinute)) {
        setIsPlaying(false);
      }
    } else if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
      const storedHour = await AsyncStorage.getItem('selectedHour');
      const storedMinute = await AsyncStorage.getItem('selectedMinute');
      if (storedHour !== null && storedMinute !== null) {
        setSelectedHour(JSON.parse(storedHour));
        setSelectedMinute(JSON.parse(storedMinute));
        if (checkIfBedtime(JSON.parse(storedHour), JSON.parse(storedMinute))) {
          setIsPlaying(true);
        }
      }
    }
    appState.current = nextAppState;
  };

  /* shows time picker 
  */
  const showDateTimePicker = () => {
    setShowPicker(true);
  };

  /*
    takes a selected date and sets the date state to that date
    sets the showPicker state to false
    sets the selected hour and minute state to the hour and minute of the selected date
    sets the isBedtime state to the result of the checkIfBedtime function
    stores the data asynchonously
  */
  const onChange = async (selectedDate) => {
    const currentDate = selectedDate || date;
    setShowPicker(Platform.OS === 'ios');
    setDate(currentDate);
    const selectedHour = currentDate.getHours();
    const selectedMinute = currentDate.getMinutes();
    setSelectedHour(selectedHour);
    setSelectedMinute(selectedMinute);
    await AsyncStorage.setItem('selectedHour', JSON.stringify(selectedHour));
    await AsyncStorage.setItem('selectedMinute', JSON.stringify(selectedMinute));
  
    // stores the current hours
    const currentHour = new Date().getHours();
    // stores the current minutes
    const currentMinute = new Date().getMinutes();
 
    // checks if the current hour is greater than the selected hour
    const isBedtime = currentHour > selectedHour || (currentHour === selectedHour && currentMinute >= selectedMinute);
    setIsBedtime(isBedtime);
    await AsyncStorage.setItem('isBedtime', JSON.stringify(isBedtime));
  };

  // checcks the current time and compares it to the selected time
  const checkIfBedtime = (selectedHour, selectedMinute) => {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();

    // Assuming bedtime starts at the selected time and ends at 4am
    if (selectedHour < 4) {
      return (currentHour >= selectedHour && currentMinute >= selectedMinute) || currentHour < 6;
    } else {
      return currentHour >= selectedHour && currentMinute >= selectedMinute;
    }
  };

  const alexFunction = () => {
    console.log("comm")
  }

  useEffect(() => {
    const retrieveTime = async () => {
      const storedHour = await AsyncStorage.getItem('selectedHour');
      const storedMinute = await AsyncStorage.getItem('selectedMinute');
      if (storedHour !== null) setSelectedHour(JSON.parse(storedHour));
      if (storedMinute !== null) setSelectedMinute(JSON.parse(storedMinute));
    };
    retrieveTime();
  }, []);

  useEffect(() => {
    AppState.addEventListener('change', handleAppStateChange);
  

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

    return (
        <View style={styles.container}>
          <Text style={{color: activeColors.text, fontSize: 30, textAlign: 'center'}}>
            {isBedtime ? 'Bedtime mode is on. Get off your phone!' : 'Bedtime mode is off. Keep scrolling.'}
          </Text>
          <Text style={{ color: activeColors.Text, fontSize: 24 }}>{displayText}</Text>
          <CountdownCircleTimer
            isPlaying={isPlaying}
            duration={60}
            colors={activeColors.primary}
            colorsTime={[10, 6, 3, 0]}
            onComplete={() => {
            alexFunction();
              return { shouldRepeat: false, delay: 2 };
            }}
            updateInterval={1}
          >
            {({ remainingTime }) => (
              <Text style={{ color: activeColors.text, fontSize: 40 }}>
                {remainingTime}
              </Text>
            )}
          </CountdownCircleTimer>
      {!isBedtime && (
        <Button title="Set Bedtime" onPress={showDateTimePicker} />
      )}
      {showPicker && !isBedtime &&
       (
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

