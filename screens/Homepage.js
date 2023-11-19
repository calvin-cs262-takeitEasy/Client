import React, { useContext, useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  LogBox,
} from 'react-native';
import PropTypes from 'prop-types';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../components/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import Header from '../shared/header';
import Footer from '../shared/footer';
import Notification from '../components/Notification';

import { useUser } from '../contexts/UserContext';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

function Homepage() {
  const { theme } = useContext(ThemeContext);
  const activeColors = Colors[theme.mode];
  const navigation = useNavigation();
  const { currentUser } = useUser();

  const [notifData, setNotifData] = useState([]);
  useEffect(() => {
    fetch(
      `https://cs262-commit.azurewebsites.net/notifications/friends/${currentUser.ID}`,
    )
      .then((response) => response.json())
      .then((json) => setNotifData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: activeColors.background,
      }}
    >
      <Header navigation={navigation} name='Home' type='withFriends' />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <StatusBar style='auto' />
        <View
          style={{
            backgroundColor: activeColors.background,
            width: Dimensions.get('window').width,
            alignItems: 'center',
          }}
        >
          <FlatList
            data={notifData}
            renderItem={({ item }) => (
              <Notification
                name={item.name}
                username={item.username}
                Text={item.type}
                id={item.id}
              />
            )}
          />
        </View>
      </View>
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        }}
      >
        <Footer navigation={navigation} page='Home' />
      </View>
    </SafeAreaView>
  );
}

Homepage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Homepage;
