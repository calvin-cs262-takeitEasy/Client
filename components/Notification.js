import React, { useContext } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";

const Notification = (props) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];

  return (
    <View
      style={{
        backgroundColor: "#0F0",
        width: Dimensions.get("window").width - 30,
        height: 95,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
      }}
    >
      <View
        style={{
          backgroundColor: activeColors.background,
          width: Dimensions.get("window").width - 32,
          height: 93,
          padding: 20,
          borderRadius: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          margin: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            width: 140,
            height: 48,
            backgroundColor: "#F00", //activeColors.secondary,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity>
            <AntDesign
              name="user"
              size={30}
              color={activeColors.text}
              style={{ marginRight: 5 }}
            />
            <View
              style={{
                flexDirection: "column",
                backgroundColor: "#F0F",
                width: 100,
              }}
            >
              <Text
                style={{
                  width: Dimensions.get("window").width - 200,
                  color: activeColors.text,
                }}
              >
                {props.name}
              </Text>
              <Text
                style={{
                  width: Dimensions.get("window").width - 200,
                  color: "#FFFFFF80",
                }}
              >
                {props.username}
              </Text>
            </View>
          </TouchableOpacity>

          {/* 
          <View style={{ backgroundColor: "#00F", width: 321, height: 47 }}>
            <Text
              style={{
                width: Dimensions.get("window").width - 200,
                color: activeColors.text,
              }}
            >
              {props.Text}
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign
              name="meh"
              size={18}
              color={activeColors.text}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome
              name="comment"
              size={18}
              color={activeColors.text}
            />
          </TouchableOpacity> */}
        </View>
      </View>
    </View>
  );
};

export default Notification;
