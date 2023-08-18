import React, { createContext, useState, useContext } from "react";

//creating a theme context

let themeContext = createContext();

function ThemeProvider({ children }) {
  let [theme, setTheme] = useState("light");
  function themeSwitchHandler() {
    setTheme((prevTheme) => {
      return !prevTheme;
    });
  }
  return (
    <>
      <themeContext.Provider>{children}</themeContext.Provider>
    </>
  );
}

export default ThemeProvider;
