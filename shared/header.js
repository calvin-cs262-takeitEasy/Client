import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";

import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";

const Header = ({ navigation, name }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  const gosettings = () => {
    navigation.navigate("Settings");
  };

  return (
    <View
      style={{
        width: Dimensions.get("screen").width,
        height: 55,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: activeColors.primary,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "flex-start" }}>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 20,
            color: "#FFF",
            letterSpacing: 1,
            marginLeft: 15,
            width: Dimensions.get("window").width - 110,
          }}
        >
          {name}
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity style={{ padding: 10 }}>
          <SimpleLineIcons name="bell" size={25} color={"#FFF"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={gosettings} style={{ padding: 10 }}>
          <Octicons name="gear" size={25} color={"#FFF"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
