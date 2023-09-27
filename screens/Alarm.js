import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity} from "react-native";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";
import {React, useContext} from "react";

const Alarm = ({ navigation }) => {
  const {theme} = useContext(ThemeContext);
  let activeColors = Colors[theme.mode]

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: activeColors.background,
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate("Homepage")}>
        <Text
          style={{
            color: activeColors.primary,
          }}
          >
          Alarm
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: Colors.background,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Alarm;
