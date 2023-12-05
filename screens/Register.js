import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { React, useContext, useState } from "react";
import PropTypes from "prop-types";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function Register({ navigation }) {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  // when the login button is pressed
  const login = () => {
    navigation.navigate("Login");
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setconfirmPassword] = useState("");

  const handleRegister = async () => {

    const usernameresponses = await fetch(
      "https://cs262-commit.azurewebsites.net/username"
    );
    const userData = await usernameresponses.json();
    const currentUser = userData.find(
      (thecuruser) => thecuruser.username === username
    );

    console.log(username + " " + password + " " + confirm);

    if (currentUser) {
      alert("Username already exists. Try again.");
      console.log("Username already exists. Try again.");
    } else if (username.length <= 3) {
      alert("Username must be at least 4 characters.");
      console.log("Username must be at least 4 characters.");
    } else if (password.length <= 0) {
      alert("Your password must be at least 8 characters");
      console.log("Your password must be at least 8 characters");
    } else if (password !== confirm) {
      alert("Wrong Password! Try Again");
      console.log("Wrong Password! Try Again");
    } else {
      try {

        const data = {
          username,
          password,
        };
        console.log(data);
        const response = await fetch(
          "https://cs262-commit.azurewebsites.net/users",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );
      } catch (error) {
        console.error(error);
      }
    }

    navigation.navigate("Login");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        backgroundColor: activeColors.background,
      }}
    >
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 25 }}>
          {/* placeholder for future app logo */}
          <View style={{ flex: 1, justifyContent: "center", padding: 50 }}>
            <Image // logo
              source={require("../assets/commit-logo.png")}
              style={{
                width: Dimensions.get("window").width - 170,
                height: Dimensions.get("window").width - 170,
                marginBottom: 100,
              }}
            />
          </View>

          {/* login title text */}
          <Text
            style={{
              fontSize: 28,
              padding: 5,
              fontWeight: "500",
              color: activeColors.text,
              marginBottom: 30,
            }}
          >
            Register
          </Text>

          {/* line to accept username */}
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: activeColors.text,
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}
          >
            <MaterialIcons
              name="alternate-email"
              size={20}
              color={activeColors.text}
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Username"
              onChangeText={(text) => setUsername(text)}
              autoCapitalize="none"
              placeholderTextColor={activeColors.text}
              style={{ flex: 1, paddingVertical: 0, color: activeColors.text }}
              keyboardType="email-address"
            />
          </View>

          {/* line to accept password */}
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: activeColors.text,
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}
          >
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color={activeColors.text}
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Password"
              onChangeText={(text) => setPassword(text)}
              autoCapitalize="none"
              placeholderTextColor={activeColors.text}
              style={{ flex: 1, paddingVertical: 0, color: activeColors.text }}
              secureTextEntry={true}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              borderBottomColor: activeColors.text,
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}
          >
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color={activeColors.text}
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Confirm Password"
              onChangeText={(text) => setconfirmPassword(text)}
              autoCapitalize="none"
              placeholderTextColor={activeColors.text}
              style={{ flex: 1, paddingVertical: 0, color: activeColors.text }}
              secureTextEntry={true}
            />
          </View>

          {/* register button */}
          <TouchableOpacity
            onPress={handleRegister}
            style={{
              backgroundColor: activeColors.primary,
              padding: 20,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "700",
                fontSize: 16,
                color: "#FFF",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>

          {/* login button */}
          <TouchableOpacity
            onPress={login}
            style={{
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: activeColors.text }}>
              Already have a Commit account?
            </Text>
            <Text
              style={{
                textAlign: "center",
                fontWeight: "700",
                fontSize: 16,
                color: activeColors.text,
                paddingLeft: 5,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

Register.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

const styles = StyleSheet.create({});

// export default Register;
