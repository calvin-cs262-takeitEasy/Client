import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Friends = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: "#d5d6db",
        }}
      >
        Friends
      </Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2a2d36",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Friends;
