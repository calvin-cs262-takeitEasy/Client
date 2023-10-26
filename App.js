import { useState, useEffect } from "react";
import RootStack from "./navigator/RootStack";
import { ThemeContext } from "./contexts/ThemeContext";
import { Appearance } from "react-native";
import { storeData, getData } from "./config/asyncStorage";
import * as SplashScreen from "expo-splash-screen";
import React from "react";
import { UserProvider } from "./contexts/UserContext";

// keep the splash screen visible while we fetch the resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [theme, setTheme] = useState({ mode: "dark" });

  // update the the theme for the light / dark mode
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

  // monitor system for theme change
  if (theme.system) {
    Appearance.addChangeListener(({ colorScheme }) => {
      updateTheme({ system: true, mode: colorScheme });
    });
  }

  // fetchs the stored theme from async storage
  const fetchStoredTheme = async () => {
    try {
      const themeData = await getData("theme");

      if (themeData) {
        updateTheme(themeData);
      }
    } catch ({ message }) {
      alert(message);
    } finally {
      await setTimeout(() => SplashScreen.hideAsync(), 1000);
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
