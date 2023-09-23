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
import { LineChart } from 'react-native-chart-kit';

const linedata = {
  labels: ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'],
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
            color: "#d5d6db",
          }}
        >
          Homepage
        </Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    
      <LineChart
        data={linedata}
       width={Dimensions.get('window').width} // from react-native
        height={220} 
        chartConfig={{
          backgroundColor: '#9A2A2A',
          backgroundGradientFrom: '#9A2A2A',
          backgroundGradientTo: '#C84B31',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16
       }}
     />
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

export default Homepage;
