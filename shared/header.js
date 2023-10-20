import React, { useContext } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { 
  Dimensions,
  StatusBar,
} from "react-native";

import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";

import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Octicons from "react-native-vector-icons/Octicons";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from "react-native-vector-icons/AntDesign";

const Header = ({ navigation, name, type }) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  const goSettings = () => {
    navigation.navigate("Settings");
  };

  const goBack = () => {
    navigation.goBack();
  };

  const openNotifDropdown = () => {
    // do thing
  };

  const goFriends = () => {
    navigation.navigate("Friends");
  };

  if (type == "withFriends") { // add friends icon
    return (
      <View
        style={{
          width: Dimensions.get("screen").width,
          height: Platform.OS === "android" ? 90 : 55,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: activeColors.primary,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight - 15 : 0
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
          <TouchableOpacity onPress={goFriends} style={{ padding: 10 }}>
            <FontAwesome5 name="user-friends" size={25} color={"#FFF"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={openNotifDropdown} style={{ padding: 10 }}>
            <SimpleLineIcons name="bell" size={25} color={"#FFF"} />
          </TouchableOpacity>
          <TouchableOpacity onPress={goSettings} style={{ padding: 10 }}>
            <Octicons name="gear" size={25} color={"#FFF"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  } else if (type == "backButton") { // have the option of the back arrow
    return (
      <View
        style={{
          width: Dimensions.get("screen").width,
          height: Platform.OS === "android" ? 90 : 55,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: activeColors.primary,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight - 15 : 0
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <TouchableOpacity onPress={goBack} style={{ padding: 10 }}>
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
  } else { // return the default header
    return (
      <View
        style={{
          width: Dimensions.get("screen").width,
          height: Platform.OS === "android" ? 90 : 55,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: activeColors.primary,
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight - 15 : 0
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
          <TouchableOpacity onPress={goSettings} style={{ padding: 10 }}>
            <Octicons name="gear" size={25} color={"#FFF"} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
};

export default Header;
