import {
  SafeAreaView, StyleSheet, Text, View,
} from 'react-native';
import PropTypes from 'prop-types';
import { React, useContext } from 'react';
import { Colors } from '../components/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import Header from '../shared/header';
import Footer from '../shared/footer';
import NightMode from '../components/NightMode';

function Bedtime({ navigation }) {
  const { theme } = useContext(ThemeContext);
  const activeColors = Colors[theme.mode];
  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
        backgroundColor: activeColors.background,
      }}
    >
      <Header navigation={navigation} name='Bedtime' />
      <NightMode />
      <View style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
      }}
      >
        <Footer navigation={navigation} page='Bedtime' />
      </View>
    </SafeAreaView>
  );
}
Bedtime.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Bedtime;
