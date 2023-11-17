import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Colors } from "../components/styles";
import { ThemeContext } from "../contexts/ThemeContext";

import { useUser } from "../contexts/UserContext";

const Notification = (props) => {
  const { theme } = useContext(ThemeContext);
  let activeColors = Colors[theme.mode];
  const { currentUser, setCurrentUser } = useUser();

  let [isPressed, setIsPressed] = useState();

  let bedtime_fail_list = [
    "Guess who's up past their bedtime again... " + props.name + "!",
    props.name + " really needs to get off their phone past bedtime.",
    props.name + " is gonna regret getting on their phone past bedtime.",
  ];
  let study_fail_list = [
    props.name + " is addicted to not studying.",
    props.name + " is gonna fail whatever they're studying.",
    props.name + " needs to stay on track and put their phone away.",
  ];
  let alarm_fail_list = [
    props.name + " is being a real lazybones.",
    props.name + " needs to set an extra loud alarm for tomorrow.",
    "Its almost like " + props.name + " doesn't care about waking up on time.",
  ];

  let bedtime_success_list = [props.name + " went to bed on time!"];
  let study_success_list = [props.name + " studied!"];
  let alarm_success_list = [props.name + " woke up on time!"];

  let text;
  if (props.Text == "bedtime_fail") {
    text =
      bedtime_fail_list[props.id % bedtime_fail_list.length];
  } else if (props.Text == "study_fail") {
    text = study_fail_list[props.id % study_fail_list.length];
  } else if (props.Text == "alarm_fail") {
    text = alarm_fail_list[props.id % alarm_fail_list.length];
  } else if (props.Text == "bedtime_success") {
    text =
      bedtime_success_list[
        props.id % bedtime_success_list.length
      ];
  } else if (props.Text == "study_success") {
    text =
      study_success_list[props.id % study_success_list.length];
  } else if (props.Text == "alarm_success") {
    text =
      alarm_success_list[props.id % alarm_success_list.length];
  } else {
    text =
      "You shouldn't be seeing this. Invalid notification type: " +
      props.Text +
      ". ";
  }

  return (
    <View //outline color
      style={{
        backgroundColor: activeColors.accent,
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
              style={{ marginRight: 5, marginBottom: -30, marginTop: 5 }} // don't question the negetive margin, idk how it works either
            />
            <View // name + username
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
                  color: activeColors.text,
                }}
              >
                {props.username}
              </Text>
            </View>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
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
              {text}
            </Text>

            <View style={{ margin: 10, marginLeft: 55, flexDirection: "row" }}>
              <TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
                <AntDesign
                  name="meh"
                  size={22}
                  color={isPressed ? "#F08080" : activeColors.text}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Notification;
