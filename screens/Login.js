import {
  SafeAreaView,
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { React, useContext } from "react";
import PropTypes from "prop-types";

import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Login = ({ navigation }) => {

  // when the login button is pressed
  const login = () => {
    navigation.navigate("Homepage");
  };

  // when the register button is pressed
  const register = () => {
    navigation.navigate("Register");
  };

  // when the forgot button is pressed
  const forgot = () => {
    navigation.navigate("Forgot");
  };

  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

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
            Login
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
              placeholderTextColor={activeColors.text}
              style={{
                flex: 1,
                paddingVertical: 0,
                color: activeColors.text,
              }}
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
              placeholderTextColor={activeColors.text}
              style={{
                flex: 1,
                paddingVertical: 0,
                color: activeColors.text,
              }}
              secureTextEntry={true}
            />

            {/* forgot password button */}
            <TouchableOpacity onPress={forgot} style={{ fontWeight: "700" }}>
              <Text
                style={{
                  color: activeColors.text,
                }}
              >
                Forgot?
              </Text>
            </TouchableOpacity>
          </View>

          {/* login button */}
          <TouchableOpacity
            onPress={login}
            style={{
              backgroundColor: activeColors.primary,
              padding: 20,
              borderRadius: 10,
              marginBottom: 0,
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
              Login
            </Text>
          </TouchableOpacity>

          {/* register button */}
          <TouchableOpacity
            onPress={register}
            style={{
              padding: 20,
              borderRadius: 10,
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: activeColors.text }}>
              Don’t have a Commit account?
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
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

Login.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
const styles = StyleSheet.create({});

export default Login;
