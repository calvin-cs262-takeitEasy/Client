import React, { useContext, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  FlatList,
  LogBox,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../components/styles';
import { ThemeContext } from '../contexts/ThemeContext';
import { LineGraph } from '../components/LineGraph';
import Header from '../shared/header';
import Footer from '../shared/footer';

import Notification from '../components/Notification';

import { useUser } from '../contexts/UserContext';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs();// Ignore all log notifications

function Profile({ navigation }) {
  const { theme } = useContext(ThemeContext);
  const activeColors = Colors[theme.mode];
  const { currentUser, setCurrentUser } = useUser();

  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
  }, []);

  const [notifData, setNotifData] = useState([]);
  useEffect(() => {
    fetch(
      `https://cs262-commit.azurewebsites.net/notifications/${currentUser.ID}`,
    )
      .then((response) => response.json())
      .then((json) => setNotifData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: activeColors.background }]}
    >
      <Header
        navigation={navigation}
        name="Profile"
        type="withFriends"
        style={{ marginTop: 15 }}
      />
      <ScrollView>
        <View style={{ alignSelf: 'left', marginLeft: 10 }}>
          <View style={{ marginTop: 5 }}>
            <View style={styles.profileImage}>
              <Image
                source={require('../assets/keith.jpg')}
                style={styles.image}
              />
            </View>
          </View>
          {/* <View style={styles.add}> // got rid of to make image more visible for presentation
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <Ionicons
                name="ios-add"
                size={38}
                color="#DFD8C8"
                style={{ marginLeft: 2 }}
              ></Ionicons>
            </TouchableOpacity>
          </View> */}
        </View>

        <View style={styles.infoContainer}>
          <Text
            style={{
              fontWeight: '200',
              fontSize: 36,
              color: activeColors.text,
            }}
          >
            {currentUser.name}
          </Text>
          <Text style={{ color: activeColors.text, fontSize: 14 }}>
            {currentUser.username}
          </Text>
        </View>

        <View style={[styles.statsContainer, { marginBottom: 15 }]}>
          <View style={styles.statsBox}>
            <Text style={[{ fontSize: 24 }, { color: activeColors.text }]}>
              {notifData.length}
            </Text>
            <Text style={[styles.subText, { color: activeColors.text }]}>
              Commits
            </Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: '#DFD8C8',
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text style={[{ fontSize: 24 }, { color: activeColors.text }]}>
              {
                notifData.filter(
                  (notif) => notif.type === 'alarm_success'
                    || notif.type === 'study_success'
                    || notif.type === 'bedtime_success',
                ).length
              }
            </Text>
            <Text style={[styles.subText, { color: activeColors.text }]}>
              Commitments Completed
            </Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[{ fontSize: 24 }, { color: activeColors.text }]}>
              {
                notifData.filter(
                  (notif) => notif.type === 'alarm_fail'
                    || notif.type === 'study_fail'
                    || notif.type === 'bedtime_fail',
                ).length
              }
            </Text>
            <Text style={[styles.subText, { color: activeColors.text }]}>
              Failed Commits
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <LineGraph />
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
            nestedScrollEnabled
            scrollEnabled={false}
            data={notifData}
            renderItem={({ item }) => (
              <Notification
                name={currentUser.name}
                username={currentUser.username}
                Text={item.type}
                id={item.id}
              />
            )}
          />
        </View>
      </ScrollView>

      <View style={{
        position: 'absolute', left: 0, right: 0, bottom: 0,
      }}
      >
        <Footer navigation={navigation} page="Profile" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: '#AEB5BC',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: 'hidden',
  },
  add: {
    backgroundColor: '#41444B',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoContainer: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: -60,
  },
  statsContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 32,
  },
  statsBox: {
    alignItems: 'center',
    flex: 1,
  },
});

export default Profile;
