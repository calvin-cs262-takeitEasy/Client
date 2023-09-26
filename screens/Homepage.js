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
import { LineChart } from "react-native-chart-kit";

import { Colors } from "../components/styles";

const linedata = {
  labels: ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"],
  datasets: [
    {
      data: [3, 4, 9, 2, 5, 6, 1],
    },
  ],
};

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

      <LineChart
        data={linedata}
        width={Dimensions.get("window").width} // from react-native
        height={220}
        chartConfig={{
          backgroundColor: Colors.secondary,
          backgroundGradientFrom: Colors.secondary,
          backgroundGradientTo: Colors.tertiary,
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(236, 219, 186, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
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
