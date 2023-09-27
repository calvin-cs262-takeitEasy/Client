import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import { React, useContext, TouchableOpacity } from "react";

const Settings = ({ navigation }) => {
  const { theme, updateTheme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  return (
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
        onPress={updateTheme}
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
          Dark Mode
        </Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
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
