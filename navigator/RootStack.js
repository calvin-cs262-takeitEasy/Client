import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Alarm from "../screens/Alarm";
import Bedtime from "../screens/Bedtime";
import Forgot from "../screens/Forgot";
import Friends from "../screens/Friends";
import Homepage from "../screens/Homepage";
import Login from "../screens/Login";
import Profile from "../screens/Profile";
import Register from "../screens/Register";
import Study from "../screens/Study";
import Settings from "../screens/Settings";
import StudyLockdown from "../screens/StudyLockdown";

const Stack = createNativeStackNavigator();

const RootStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          cardStyle: { backgroundColor: "transparent" },
          gestureEnabled: false,
          animation:'fade'
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Forgot" component={Forgot} />
        <Stack.Screen name="Homepage" component={Homepage} />
        <Stack.Screen name="Alarm" component={Alarm} />
        <Stack.Screen name="Study" component={Study} />
        <Stack.Screen name="StudyLockdown" component={StudyLockdown} />
        <Stack.Screen name="Bedtime" component={Bedtime} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Friends" component={Friends} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStack;
