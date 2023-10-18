import { Audio } from "expo-av";
import { useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import RNPickerSelect from "react-native-picker-select";

const soundObject = new Audio.Sound();

export const AlarmClock = () => {
  const [alarms, setAlarms] = useState([]);
  const [showButtons, setShowButtons] = useState(false);
  const [selectedHour, setSelectedHour] = useState("00");
  const [selectedMinute, setSelectedMinute] = useState("00");

  const handleAlarm = async () => {
    try {
      await soundObject.loadAsync(require("../assets/wake_up.mp3"));
      const status = await soundObject.getStatusAsync();
      console.log(status);
      soundObject.setOnPlaybackStatusUpdate((status) => {
        if (status.isLoaded && !status.isPlaying) {
          soundObject.playAsync();
          setShowButtons(true);
        }
        if (status.didJustFinish) {
          soundObject.unloadAsync();
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleSnooze = () => {
    setShowButtons(false);
    setTimeout(() => {
      handleAlarm();
    }, 7 * 60 * 1000); // 7 minutes
  };

  const handleStop = async () => {
    setShowButtons(false);
    await soundObject.stopAsync();
    await soundObject.unloadAsync();
  };

  const handleAddAlarm = () => {
    const newAlarm = `${selectedHour}:${selectedMinute}`;
    setAlarms([...alarms, newAlarm]);
    setSelectedHour("00");
    setSelectedMinute("00");
  };

  const handleDeleteAlarm = (index) => {
    const newAlarms = [...alarms];
    newAlarms.splice(index, 1);
    setAlarms(newAlarms);
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.alarmContainer}>
        <Text style={styles.alarmText}>{item}</Text>
        <Button title="Delete" onPress={() => handleDeleteAlarm(index)} />
      </View>
    );
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
    <View style={styles.container}>
      <Text style={styles.title}>Set Alarm Time:</Text>
      <View style={styles.timeChooser}>
        <RNPickerSelect
          onValueChange={(value) => setSelectedHour(value)}
          items={hourOptions}
          value={selectedHour}
          placeholder={{ label: "HH", value: null }}
          style={pickerSelectStyles}
        />
        <Text style={styles.timeSeparator}>:</Text>
        <RNPickerSelect
          onValueChange={(value) => setSelectedMinute(value)}
          items={minuteOptions}
          value={selectedMinute}
          placeholder={{ label: "MM", value: null }}
          style={pickerSelectStyles}
        />
      </View>
      <Button title="Add" onPress={handleAddAlarm} />
      <View style={styles.alarmsContainer}>
        <FlatList data={alarms} renderItem={renderItem} />
      </View>
      {showButtons && (
        <View style={styles.buttonsContainer}>
          <Button title="Snooze" onPress={handleSnooze} />
          <Button title="Stop" onPress={handleStop} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  timeChooser: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  timeSeparator: {
    fontSize: 24,
    marginHorizontal: 5,
  },
  alarmsContainer: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  alarmContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 5,
    borderBottomWidth: 1,
    borderBottomColor: "black",
  },
  alarmText: {
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    marginTop: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 4,
    color: "black",
    paddingRight: 30,
    marginBottom: 10,
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: "purple",
    borderRadius: 8,
    color: "black",
    paddingRight: 30,
    marginBottom: 10,
  },
});
