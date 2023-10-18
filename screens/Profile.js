import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { LineGraph } from "../components/LineGraph";
import { StatusBar } from "expo-status-bar";
import PropTypes from "prop-types";
import Header from "../shared/header";
import Footer from "../shared/footer";

const Profile = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: activeColors.background }]}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header navigation={navigation} name="Profile" type="withFriends" />

        <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
          <Footer navigation={navigation} page="Profile" />
        </View>
        <View style={{ alignSelf: "left", marginLeft: 10 }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../assets/icon.png")}
              style={styles.image}
              resizeMode="left"
            ></Image>
          </View>
          {/* <View style={styles.dm}>
            <MaterialIcons name="chat" size={18} color="#D0D0D0"></MaterialIcons>
          </View> */}
          <View style={styles.active}></View>
          <View style={styles.add}>
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
          </View>
        </View>

        <View style={styles.infoContainer}>
          <Text
            style={[
              styles.text,
              { fontWeight: "200", fontSize: 36, color: activeColors.text },
            ]}
          >
            User
          </Text>
          <Text
            style={[styles.text, { color: activeColors.text, fontSize: 14 }]}
          >
            Like to sing
          </Text>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statsBox}>
            <Text
              style={[
                styles.text,
                { fontSize: 24 },
                { color: activeColors.text },
              ]}
            >
              100
            </Text>
            <Text
              style={[
                styles.text,
                styles.subText,
                { color: activeColors.text },
              ]}
            >
              Commits
            </Text>
          </View>
          <View
            style={[
              styles.statsBox,
              {
                borderColor: "#DFD8C8",
                borderLeftWidth: 1,
                borderRightWidth: 1,
              },
            ]}
          >
            <Text
              style={[
                styles.text,
                { fontSize: 24 },
                { color: activeColors.text },
              ]}
            >
              20
            </Text>
            <Text
              style={[
                styles.text,
                styles.subText,
                { color: activeColors.text },
              ]}
            >
              Followers
            </Text>
          </View>
          <View style={styles.statsBox}>
            <Text
              style={[
                styles.text,
                { fontSize: 24 },
                { color: activeColors.text },
              ]}
            >
              100
            </Text>
            <Text
              style={[
                styles.text,
                styles.subText,
                { color: activeColors.text },
              ]}
            >
              Failed Commits
            </Text>
          </View>
        </View>
        {/* <Text style={[styles.subText, styles.recent, {color: activeColors.text}]}>Recent Activity</Text> */}
        {/* <View style={{ alignItems: "center" }}>
          <View style={styles.recentItem}>
            <View style={styles.activityIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { fontWeight: "300" }, {color: activeColors.text}]}
              >
                Started following{" "}
                <Text style={[{ fontWeight: "400" }, {color: activeColors.text}]}>The WIZARD</Text> and{" "}
                <Text style={{ fontWeight: "400" }}>Peemer</Text>
              </Text>
            </View>
          </View> */}

        {/* <View style={styles.recentItem}>
            <View style={styles.activityIndicator}></View>
            <View style={{ width: 250 }}>
              <Text
                style={[styles.text, { color: activeColors.text, fontWeight: "300" }]}
              >
                Started following{" "}
                <Text style={[{ fontWeight: "400" }, {color: activeColors.text}]}>KINg Charles</Text>
              </Text>
            </View>
        </View> */}
        <LineGraph />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: "HelveticaNeue",
    color: "#52575D",
  },
  image: {
    flex: 1,
    height: undefined,
    width: undefined,
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16,
  },
  subText: {
    fontSize: 12,
    color: "#AEB5BC",
    textTransform: "uppercase",
    fontWeight: "500",
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
    overflow: "hidden",
  },
  // dm: {
  //   backgroundColor: "#41444B",
  //   position: "absolute",
  //   top: 20,
  //   width: 20,
  //   height: 20,
  //   borderRadius: 20,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
  // active: {
  //   backgroundColor: "#34FFB9",
  //   position: "absolute",
  //   bottom: 28,
  //   left: 10,
  //   padding: 4,
  //   height: 20,
  //   width: 20,
  //   borderRadius: 10,
  // },
  add: {
    backgroundColor: "#41444B",
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 40,
    height: 40,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  infoContainer: {
    alignSelf: "center",
    alignItems: "center",
    marginTop: -60,
  },
  statsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 32,
  },
  statsBox: {
    alignItems: "center",
    flex: 1,
  },
  mediaImageContainer: {
    width: 180,
    height: 200,
    borderRadius: 12,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  mediaCount: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: "50%",
    marginTop: -50,
    marginLeft: 30,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    shadowColor: "rgba(0, 0, 0, 0.38)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 20,
    shadowOpacity: 1,
  },
  // recent: {
  //   marginLeft: 78,
  //   marginTop: 32,
  //   marginBottom: 6,
  //   fontSize: 10,
  // },
  // recentItem: {
  //   flexDirection: "row",
  //   alignItems: "flex-start",
  //   marginBottom: 16,
  // },
  // activityIndicator: {
  //   backgroundColor: "#CABFAB",
  //   padding: 4,
  //   height: 12,
  //   width: 12,
  //   borderRadius: 6,
  //   marginTop: 3,
  //   marginRight: 20,
  // },
});

export default Profile;
