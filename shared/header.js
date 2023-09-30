import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";

import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";

const Header = (props) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

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
            paddingLeft: 15,
          }}
        >
          {props.name}
        </Text>
      </View>

      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <TouchableOpacity style={{ padding: 5 }}>
          <SimpleLineIcons name="bell" size={20} color={"#FFF"} />
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 5 }}>
          <Octicons name="gear" size={20} color={"#FFF"} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
