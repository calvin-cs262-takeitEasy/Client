import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../components/styles";

const Alarm = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Colors.primary,
        }}
      >
        Alarm
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Alarm;
