import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import LoginScreen from './screens/LoginScreen';
import HomepageScreen from './screens/HomepageScreen';

export default function App() {
  return (
    /*
    <View style={styles.container}>
      <Text>Hello world! Hopefully this doesn't crash.</Text>
      <StatusBar style="auto" />
    </View>
    */

    //<HomepageScreen/>
    <LoginScreen/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
