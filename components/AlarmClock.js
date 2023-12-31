import React, { useState, useEffect, useContext } from "react";
import {
  View,
  Button,
  Platform,
  FlatList,
  TouchableOpacity,
  Text,
  Dimensions,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Audio } from "expo-av";
import { Colors } from "./styles";
import { ThemeContext } from "../contexts/ThemeContext";

export default function App() {
  const [alarms, setAlarms] = useState([]);
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [sound, setSound] = useState();
  const { theme } = useContext(ThemeContext);
  const [timeoutId, setTimeoutId] = useState(null);
  let activeColors = Colors[theme.mode];

  useEffect(() => {
    Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      // interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX, // I don't know why but these are giving warnings *AM
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      // interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX, // I don't know why but these are giving warnings *AM
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

  /*Checks if the sound object exists, 
  plays the sound after loading and unloading, and sets a timeout 
  to call the desired function after 20 seconds
  */
  const playSound = async () => {
    // Load the sound
    if (sound) {
      await sound.unloadAsync();
      await sound.loadAsync(require("../assets/wake_up.mp3"));
    }

    // Play the sound
    if (sound) {
      await sound.playAsync();
    }

    // Start a timeout that will call the desired function after 20 seconds
    const id = setTimeout(createNotification, 20000);
    setTimeoutId(id);
  
  };

  /*Shows the date/time picker*/
  const showDateTimePicker = () => {
    setShowPicker(true);
  };

  /*Hides the date/time picker*/
  const hideDateTimePicker = () => {
    setShowPicker(false);
  };

  /* Hides the datetimepicker, checks for a selected date
  if seclected, set the date and set the alarm to date.
  Then, at the date, play the alarm and ensure
  that if the date is in the past, that it plays tomorrow. */
  const handleDateChange = (event, selectedDate) => {
    hideDateTimePicker();
    if (selectedDate) {
      setDate(selectedDate);
      const newAlarms = [...alarms, selectedDate];
      setAlarms(newAlarms);
      // Schedule the sound to play at the selected time
      const now = new Date();
      let delay = selectedDate - now; // Delay in milliseconds
      if (delay < 0) {
        delay += 24 * 60 * 60 * 1000; // add 24 hours if the alarm time is in the past
      }
      setTimeout(() => {
        playSound();
      }, delay);
    }
  };

  /* Deletes the alarm at the given index */
  const deleteAlarm = (index) => {
    const newAlarms = [...alarms];
    newAlarms.splice(index, 1);
    setAlarms(newAlarms);
  };

  /* Checks and clears timeout
  stops the sound by unloading it
    */
  const handleStop = () => {
    // Clear the timeout
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }

    // Stop and unload the sound
    if (sound) {
      sound.stopAsync();
      sound.unloadAsync();
    }
  };

  /* Allows alex to send comms */
  const createNotification = async () => {
    const data = {
      userID: currentUser.ID,
      type: "alarm_fail",
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

  return (
    <View>
      {/* <Button title="Set Alarm" onPress={showDateTimePicker} /> */}
      <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          onPress={showDateTimePicker}
          style={{
            backgroundColor: activeColors.primary,
            width: Dimensions.get("window").width / 2 - 50,
            height: 100,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 25 }}>Set Alarm</Text>
        </TouchableOpacity>

        {/* <Button title="Stop this horrid noise." onPress={handleStop} /> */}
        <TouchableOpacity
          onPress={handleStop}
          style={{
            backgroundColor: activeColors.primary,
            width: Dimensions.get("window").width / 2 - 50,
            height: 100,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 20,
            marginLeft: 20,
          }}
        >
          <Text style={{ color: "#FFF", fontSize: 25 }}>Stop Alarm</Text>
        </TouchableOpacity>
      </View>

      <View style={{ justifyContent: "center", alignItems: "center" }}>
        {showPicker && (
          <DateTimePicker
            value={date}
            mode="time"
            is24Hour={true}
            display="default"
            onChange={handleDateChange}
            style={{
              width: 300,
              opacity: 1,
              height: 30,
              marginTop: 50,
              color: activeColors.text,
            }}
          />
        )}
      </View>

      <FlatList
        data={alarms}
        keyExtractor={(item) => item.toString()}
        style={{ color: activeColors.text, height: 200 }}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 10,
            }}
          >
            <Text style={{ color: activeColors.text, fontSize: 50 }}>
              {item.toLocaleTimeString()}
            </Text>
            <TouchableOpacity onPress={() => deleteAlarm(index)}>
              <View
                style={{
                  backgroundColor: activeColors.deleteRed,
                  borderColor: activeColors.text,
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 10,
                  marginLeft: 10,
                }}
              >
                <Text style={{ color: "#FFF", fontSize: 20 }}>Delete</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}