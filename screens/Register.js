import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";

import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

const Login = ({ navigation }) => {
  const login = () => {
    navigation.navigate("Login");
  };

  const register = () => {
    navigation.navigate("Homepage");
  };

  return (
    <SafeAreaView
      style={{ flex: 1, justifyContent: "center", backgroundColor: "#2a2d36" }}
    >
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 25 }}>
          {/* placeholder for future app logo */}
          <View style={{ flex: 1, alignItems: "center", padding: 50 }}>
            <Text
              style={{
                color: "#d5d6db",
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
              color: "#d5d6db",
              marginBottom: 30,
            }}
          >
            Register
          </Text>

          {/* line to accept username */}
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}
          >
            <MaterialIcons
              name="alternate-email"
              size={20}
              color="#d5d6db"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Username"
              style={{ flex: 1, paddingVertical: 0, color: "#d5d6db" }}
              keyboardType="email-address"
            />
          </View>

          {/* line to accept password */}
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: "#ccc",
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}
          >
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color="#d5d6db"
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Password"
              style={{ flex: 1, paddingVertical: 0, color: "#d5d6db" }}
              secureTextEntry={true}
            />
          </View>

          {/* register button */}
          <TouchableOpacity
            onPress={register}
            style={{
              backgroundColor: "#6224ad",
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
                color: "#d5d6db",
              }}
            >
              Register
            </Text>
          </TouchableOpacity>

          {/* login button */}
          <TouchableOpacity
            onPress={login}
            style={{
              backgroundColor: "#6224ad",
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
                color: "#d5d6db",
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

{
  /* background color */
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2a2d36",
  },
});

export default Login;
