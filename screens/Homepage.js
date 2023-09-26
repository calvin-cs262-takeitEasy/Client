import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  Dimensions,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

import { Colors } from "../components/styles";
import { LineGraph } from "../components/LineGraph"

const Homepage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text
          style={{
            color: Colors.primary,
          }}
        >
          Homepage
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
      <LineGraph />
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

export default Homepage;
