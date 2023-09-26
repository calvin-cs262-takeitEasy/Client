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

import { Colors } from "../components/styles";

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
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: Colors.background,
      }}
    >
      <View style={styles.container}>
        <View style={{ paddingHorizontal: 25 }}>
          {/* placeholder for future app logo */}
          <View style={{ flex: 1, alignItems: "center", padding: 50 }}>
            <Text
              style={{
                color: "#ECDBBA",
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
              color: Colors.primary,
              marginBottom: 30,
            }}
          >
            Register
          </Text>

          {/* line to accept username */}
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: Colors.primary,
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}
          >
            <MaterialIcons
              name="alternate-email"
              size={20}
              color={Colors.primary}
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Username"
              placeholderTextColor={Colors.primary}
              style={{ flex: 1, paddingVertical: 0, color: Colors.primary }}
              keyboardType="email-address"
            />
          </View>

          {/* line to accept password */}
          <View
            style={{
              flexDirection: "row",
              borderBottomColor: Colors.primary,
              borderBottomWidth: 1,
              paddingBottom: 8,
              marginBottom: 25,
            }}
          >
            <Ionicons
              name="ios-lock-closed-outline"
              size={20}
              color={Colors.primary}
              style={{ marginRight: 5 }}
            />
            <TextInput
              placeholder="Password"
              placeholderTextColor={Colors.primary}
              style={{ flex: 1, paddingVertical: 0, color: Colors.primary }}
              secureTextEntry={true}
            />
          </View>

          {/* register button */}
          <TouchableOpacity
            onPress={register}
            style={{
              backgroundColor: Colors.secondary,
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
                color: Colors.primary,
              }}
            >
              Register
            </Text>
          </TouchableOpacity>

          {/* login button */}
          <TouchableOpacity
            onPress={login}
            style={{
              backgroundColor: Colors.secondary,
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
                color: Colors.primary,
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
    backgroundColor: Colors.background,
  },
});

export default Login;
