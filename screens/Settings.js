import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import React, { useContext } from "react";

const Settings = ({ navigation }) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        backgroundColor: activeColors.background,
      }}
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
          <Text
            style={{
              color: activeColors.primary,
            }}
          >
            Settings
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => updateTheme()}
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
            {theme.mode === "dark" ? "Dark Mode" : "Light Mode"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => updateTheme({ system: true })}
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
            System Theme
          </Text>
        </TouchableOpacity>

        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    //backgroundColor: activeColors.background,
  },
});

export default Settings;
