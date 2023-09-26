import { useState } from "react";
import RootStack from "./navigator/RootStack";
import { ThemeContext } from "./contexts/ThemeContext";

export default function App() {
  const [theme, setTheme] = useState({ mode: "dark" });

  const updateTheme = (newTheme) => {
    let mode;
    if (!newTheme) {
      mode = theme.mode === "dark" ? "light" : "dark";
      newTheme = { mode };
    }
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, updateTheme }}>
      <RootStack />
    </ThemeContext.Provider>
  );
}
