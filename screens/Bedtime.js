import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../components/styles";

const Bedtime = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: Colors.primary,
        }}
      >
        Bedtime
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

export default Bedtime;
