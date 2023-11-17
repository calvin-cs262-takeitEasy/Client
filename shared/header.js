import React, { useContext } from 'react';
import {
  Text, TouchableOpacity, View, Dimensions, StatusBar,
} from 'react-native';

import Octicons from 'react-native-vector-icons/Octicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ThemeContext } from '../contexts/ThemeContext';
import { Colors } from '../components/styles';

function Header({ navigation, name, type }) {
  const { theme } = useContext(ThemeContext);
  const activeColors = Colors[theme.mode];

  // if the settings button is pressed
  const goSettings = () => {
    navigation.navigate('Settings');
  };

  // if the back button is pressed
  const goBack = () => {
    navigation.goBack();
  };

  // if the notification button is pressed
  const openNotifDropdown = () => {
    // do thing
  };

  // if the friends button is pressed
  const goFriends = () => {
    navigation.navigate('Friends');
  };

  if (type == 'withFriends') {
    // add friends icon
    return (
      <View
        style={{
          width: Dimensions.get('screen').width,
          height: Platform.OS === 'android' ? 100 : 55,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: activeColors.primary,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: '#FFF',
              letterSpacing: 1,
              marginLeft: 15,
              width: Dimensions.get('window').width - 120,
            }}
          >
            {name}
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
          }}
        >
          <TouchableOpacity
            onPress={goFriends}
            style={{ padding: 10, width: 50, height: 50 }}
          >
            <FontAwesome5 name="user-friends" size={25} color="#FFF" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={goSettings}
            style={{ padding: 10, width: 50, height: 50 }}
          >
            <Octicons name="gear" size={25} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>
    );
  } if (type == 'backButton') {
    // have the option of the back arrow
    return (
      <View
        style={{
          width: Dimensions.get('screen').width,
          height: Platform.OS === 'android' ? 100 : 55,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: activeColors.primary,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={goBack}
            style={{ padding: 10, width: 50, height: 50 }}
          >
            <AntDesign name="back" size={25} color="#FFF" />
          </TouchableOpacity>

          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: '#FFF',
              letterSpacing: 1,
              marginLeft: 15,
              width: Dimensions.get('window').width - 110,
            }}
          >
            {name}
          </Text>
        </View>
      </View>
    );
  }
  // return the default header
  return (
    <View
      style={{
        width: Dimensions.get('screen').width,
        height: Platform.OS === 'android' ? 100 : 55,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: activeColors.primary,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#FFF',
            letterSpacing: 1,
            marginLeft: 15,
            width: Dimensions.get('window').width - 70,
          }}
        >
          {name}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}
      >
        <TouchableOpacity
          onPress={goSettings}
          style={{ padding: 10, width: 50, height: 50 }}
        >
          <Octicons name="gear" size={25} color="#FFF" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;
