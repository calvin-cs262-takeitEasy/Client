import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Dimensions } from "react-native";

import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

const Header = ({ navigation, name, type }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  const gosettings = () => {
    navigation.navigate("Settings");
  };

  if (type == "withFriends") {
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
              width: Dimensions.get("window").width - 160,
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
            <FontAwesome5 name="user-friends" size={25} color={"#FFF"} />
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <SimpleLineIcons name="bell" size={25} color={"#FFF"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={gosettings} style={{ padding: 10 }}>
            <Octicons name="gear" size={25} color={"#FFF"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (type == "backButton") {
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TouchableOpacity style={{ padding: 10 }}>
            <AntDesign name="back" size={25} color={"#FFF"} />
          </TouchableOpacity>

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
      </View>
    );
  } else {
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
  }
};

export default Header;
