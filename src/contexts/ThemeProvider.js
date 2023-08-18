import React, { createContext, useState } from "react";

//creating a theme context

let themeContext = createContext();

function ThemeProvider({ children }) {
  let [darkMode, setDarkMode] = useState(false);
  function themeSwitchHandler() {
    setDarkMode((darkMode) => {
      return !darkMode;
    });
  }
  return (
    <>
      <themeContext.Provider
        value={{ darkMode, switchTheme: themeSwitchHandler }}
      >
        {children}
      </themeContext.Provider>
    </>
  );
}

export default ThemeProvider;
export { themeContext };
