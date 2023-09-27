import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import {React, useContext} from "react";
import PropTypes from "prop-types";

import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Login = ({ navigation }) => {
  const login = () => {
    navigation.navigate("Homepage");
  };

  const register = () => {
    navigation.navigate("Register");
  };

  const forgot = () => {
    navigation.navigate("Forgot");
  };

  const {theme} = useContext(ThemeContext);
  let activeColors = Colors[theme.mode]

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: activeColors.background,
      }}
    >
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 25 }}>
          {/* placeholder for future app logo */}
          <View style={{ flex: 1, alignItems: "center", padding: 50 }}>
            <Text
              style={{
                color: activeColors.primary,
              }}
            >
              Possible Logo here?
            </Text>
          </View>

          {/* login title text */}
          <Text
            style={{
              fontSize: 28,
              padding: 5,
              fontWeight: "500",
              color: activeColors.primary,
              marginBottom: 30,
            }}
          >
            Login
          </Text>

          {/* line to accept username */}
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: activeColors.primary,
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}
          >
            <MaterialIcons
              name="alternate-email"
              size={20}
              color={activeColors.primary}
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor={activeColors.primary}
              style={{ flex: 1, paddingVertical: 0, color: activeColors.primary }}
              keyboardType="email-address"
            />
          </View>

          {/* line to accept password */}
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: activeColors.primary,
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}
          >
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color={activeColors.primary}
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={activeColors.primary}
              style={{ flex: 1, paddingVertical: 0, color: activeColors.primary }}
              secureTextEntry={true}
            />

            {/* forgot password button */}
            <TouchableOpacity
              onPress={forgot}
              style={{fontWeight: "700"}}
            >
              <Text
                style={{
                  color: activeColors.primary,
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
              backgroundColor: activeColors.secondary,
              padding: 20,
              borderRadius: 10,
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "700",
                fontSize: 16,
                color: activeColors.primary,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>

          {/* register button */}
          <TouchableOpacity
            onPress={register}
            style={{
              backgroundColor: activeColors.secondary,
              padding: 20,
              borderRadius: 10,
              marginBottom: 30,
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontWeight: "700",
                fontSize: 16,
                color: activeColors.primary,
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

{
  /* background color */
}
const styles = StyleSheet.create({
  container: {
    //backgroundColor: activeColors.background,
  },
});

export default Login;