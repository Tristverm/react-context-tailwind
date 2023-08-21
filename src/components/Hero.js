import React from "react";
import { themeContext } from "../contexts/ThemeProvider";

function Hero() {
  return (
    <themeContext.Consumer>
      {({ darkMode }) => {
        return (
          <div
            className={`container text-center mx-auto p-4 mt-4 ${
              darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
            }`}
          >
            <p>
              This is the content area. The theme is currently
              {darkMode ? "dark" : "light"}.
            </p>
          </div>
        );
      }}
    </themeContext.Consumer>
  );
}

export default Hero;
