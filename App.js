/**
 * React Native application component that runs the app Commit.
 * @module App
 * Screens:
 * Alarm: Set and delete alarms that will go off when they reach the time set
 * Bedtime: set bedtime mode and keep track of the minute grace time
 * Friends: search for users and connect to the database to add friends
 * Help: show a list of helpful tips
 * Homepage: show the comms from you and other users
 * Login: input your username and password to access the other screens
 * Profile: Show your stats in numbers, a graph, and your comms
 * Register: connect to the database to create a new user
 * Settings: switch between light and dark mode, and log out
 * Study: set a timer that opens StudyLockdown
 * StudyLockdown: doesnt let you leave the screen without pressing a button that sends a comm
 * 
 * navagate between these using the buttons in the header and the footer which uses the RootStack
 */

import React, { useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Appearance } from "react-native";

import { ThemeContext } from "./contexts/ThemeContext";
import { UserProvider } from "./contexts/UserContext";
import { storeData, getData } from "./config/asyncStorage";
import RootStack from "./navigator/RootStack";

/**
 * App component represents the root of the React Native application.
 *
 * @function App
 * @returns {JSX.Element} Rendered React component.
 */
export default function App() {

  const [theme, setTheme] = useState({ mode: "dark" });

  /**
   * Updates the theme based on the new theme configuration.
   *
   * @function updateTheme
   * @param {Object} newTheme - The new theme configuration.
   * @param {string} [newTheme.mode] - The mode of the theme.
   * @param {boolean} [newTheme.system] - Indicates whether the system theme is being used.
   */
  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = { mode, system: false };
    } else {
      if (newTheme.system) {
        const systemColorScheme = Appearance.getColorScheme();
        mode = systemColorScheme === "dark" ? "dark" : "light";

        newTheme = { ...newTheme, mode };
      } else {
        newTheme = { ...newTheme, system: false };
      }
    }
    setTheme(newTheme);
    storeData("theme", newTheme);
  };

  /**
   * Monitors the system for theme changes and updates the app's theme accordingly.
   */
  if (theme.system) {
    Appearance.addChangeListener(({ colorScheme }) => {
      updateTheme({ system: true, mode: colorScheme });
    });
  }

  /**
   * Fetches the stored theme from async storage and hides the splash screen after completion.
   */
  const fetchStoredTheme = async () => {
    try {
      const themeData = await getData("theme");

      if (themeData) {
        updateTheme(themeData);
      }
    } catch ({ message }) {
      // Display error message to the user or log the error.
      console.error(message);
    } finally {
      await SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    fetchStoredTheme();
  }, []);


  return (
    <UserProvider>
      <ThemeContext.Provider value={{ theme, updateTheme }}>
        <RootStack />
      </ThemeContext.Provider>
    </UserProvider>
  );
}
