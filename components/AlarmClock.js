
import React, { useState, useEffect } from 'react';
import { View, Button, Platform, FlatList, TouchableOpacity, Text} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Audio } from 'expo-av';

export default function App() {
  const [alarms, setAlarms] = useState([]);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [sound, setSound] = useState();

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
    });

    // Load the alarm sound
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/wake_up.mp3")
      );
      setSound(sound);
    };

    loadSound();

    return () => {
      // Unload the sound when the component unmounts
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, []);

  const playSound = async () => {
    if (sound) {
      await sound.playAsync();
    }
  };

  const showDateTimePicker = () => {
    setShowPicker(true);
  };

  const hideDateTimePicker = () => {
    setShowPicker(false);
  };

  const handleDateChange = (event, selectedDate) => {
    hideDateTimePicker();
    if (selectedDate) {
      setDate(selectedDate);
      const newAlarms = [...alarms, selectedDate];
      setAlarms(newAlarms);
      // Schedule the sound to play at the selected time
      const now = new Date();
      const delay = Math.max(selectedDate - now, 0); // Delay in milliseconds
      setTimeout(() => {
        playSound();
      }, delay);
    }
  };

  const deleteAlarm = (index) => {
    const newAlarms = [...alarms];
    newAlarms.splice(index, 1);
    setAlarms(newAlarms);
  }

  const handleStop = () => {
    if (sound) {
      sound.stopAsync();
      setSound(null);
      // Stop all currently playing sounds before deleting the alarm
      for (let i = 0; i < alarms.length; i++) {
        if (sound[i]) {
          sound[i].stopAsync();
          sound[i] = null;
        }
      }
    }
  };

  return (
    <View>
      <Button title="Set Alarm" onPress={showDateTimePicker} />
      {showPicker && (
        <DateTimePicker
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={handleDateChange}
          style={{width: 300, opacity: 1, height: 30, marginTop: 50}}
        />
      )}
      <Button title="Stop this horrid noise." onPress={handleStop} />

      <FlatList
        data = {alarms}
        keyExtractor={(item) => item.toString()}
        renderItem={({ item, index }) => (
          <View>
            <Text>{item.toLocaleTimeString()}</Text>
            <TouchableOpacity onPress={() => deleteAlarm(index)}>
              <Text>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
        />
    </View>
  );
}
