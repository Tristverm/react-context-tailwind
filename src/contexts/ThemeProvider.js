import React, { createContext, useState, useContext } from "react";

//creating a theme context

let themeContext = createContext();

function ThemeProvider({ children }) {
  let [theme, setTheme] = useState("light");
  return (
    <>
      <themeContext.Provider></themeContext.Provider>
    </>
  );
}

export default ThemeProvider;
