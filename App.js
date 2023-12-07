/**
 * React Native application component that runs the app Commit.
 * @module App
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
  /**
   * State to manage the current theme.
   * @type {Object}
   * @property {string} mode - The mode of the theme (e.g., "dark" or "light").
   * @property {boolean} system - Indicates whether the system theme is being used.
   */
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

    if (!newTheme || newTheme.mode === "dark") {
      mode = "light";
      newTheme = { mode, system: false };
    } else {
      // Handle other cases
    }

    setTheme(newTheme);
    storeData("theme", newTheme);
  };

  /**
   * Monitors the system for theme changes and updates the app's theme accordingly.
   */
  useEffect(() => {
    const handleChange = ({ colorScheme }) => {
      updateTheme({ system: true, mode: colorScheme });
    };

    if (theme.system) {
      Appearance.addChangeListener(handleChange);
    }

    return () => {
      if (theme.system) {
        Appearance.removeChangeListener(handleChange);
      }
    };
  }, [theme.system]);

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

  /**
   * Renders the main application structure with theme and user context providers.
   *
   * @returns {JSX.Element} Rendered React component.
   */
  return (
    <UserProvider>
      <ThemeContext.Provider value={{ theme, updateTheme }}>
        <RootStack />
      </ThemeContext.Provider>
    </UserProvider>
  );
}
