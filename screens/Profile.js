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
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { LineGraph } from "../components/LineGraph";
import Header from "../shared/header";
import Footer from "../shared/footer";

const Profile = ({ navigation }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];
  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: activeColors.background }]}
    >
      <Header navigation={navigation} name="Profile" type="withFriends" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 15 }}
      >
        <View style={{ alignSelf: "left", marginLeft: 10 }}>
          <View style={styles.profileImage}>
            <Image
              source={require("../assets/icon.png")}
              style={styles.image}
            ></Image>
          </View>
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
            style={{
              fontWeight: "200",
              fontSize: 36,
              color: activeColors.text,
            }}
          >
            User
          </Text>
          <Text style={{ color: activeColors.text, fontSize: 14 }}>
            Like to sing
          </Text>
        </View>

        <View style={[styles.statsContainer, { marginBottom: 15 }]}>
          <View style={styles.statsBox}>
            <Text style={[{ fontSize: 24 }, { color: activeColors.text }]}>
              100
            </Text>
            <Text style={[styles.subText, { color: activeColors.text }]}>
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
            <Text style={[{ fontSize: 24 }, { color: activeColors.text }]}>
              20
            </Text>
            <Text style={[styles.subText, { color: activeColors.text }]}>
              Followers
            </Text>
          </View>
          <View style={styles.statsBox}>
            <Text style={[{ fontSize: 24 }, { color: activeColors.text }]}>
              100
            </Text>
            <Text style={[styles.subText, { color: activeColors.text }]}>
              Failed Commits
            </Text>
          </View>
        </View>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <LineGraph />
        </View>
      </ScrollView>
      <View style={{ position: "absolute", left: 0, right: 0, bottom: 0 }}>
        <Footer navigation={navigation} page="Profile" />
      </View>
    </SafeAreaView>
  );
};

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
});

export default Profile;
