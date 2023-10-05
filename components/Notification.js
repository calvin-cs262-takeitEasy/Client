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
    <View //outline color
      style={{
        backgroundColor: "#0F0",
        width: Dimensions.get("window").width - 30,
        height: 115,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
      }}
    >
      <View //notif backdrop
        style={{
          backgroundColor: activeColors.background,
          width: Dimensions.get("window").width - 32,
          height: 113,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
          //alignItems: "center",
          justifyContent: "space-between",
          margin: 5,
        }}
      >
        <View // user icon + name + username
          style={{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: "wrap",
            width: 140,
            height: 40,
            backgroundColor: activeColors.secondary,
            borderRadius: 10,
          }}
        >
          <TouchableOpacity>
            <AntDesign
              name="user"
              size={30}
              color={activeColors.text}
              style={{ marginRight: 5, marginBottom: -30, marginTop: 5 }} //don't question the negetive margin, idk how it works either
            />
            <View //name + username
              style={{
                flexDirection: "column",
                width: 100,
                marginLeft: 30,
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

          <View
            style={{
              flexDirection: "row",
              //alignItems: "center",
              flexWrap: "wrap",
              width: Dimensions.get("window").width - 52,
              height: 48,
              backgroundColor: activeColors.secondary,
              borderRadius: 10,
              marginTop: 25,
            }}
          >
            <Text
              style={{
                color: activeColors.text,
                margin: 10,
                width: (Dimensions.get("window").width - 52) * (2 / 3),
              }}
            >
              {props.Text}
            </Text>

            <View style={{margin: 10, marginLeft: 60}}>
              <TouchableOpacity>
                <AntDesign name="meh" size={16} color={activeColors.text} />
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesome
                  name="comment"
                  size={16}
                  color={activeColors.text}
                />
              </TouchableOpacity>
            </View>
          </View>

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
