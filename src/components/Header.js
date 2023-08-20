import { useContext } from "react";
import React from "react";
import { themeContext } from "../contexts/ThemeProvider";
function Header() {



  return (
    <header
      className={`p-4 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-semibold">Theme Toggle App</h1>
        <button
          onClick={toggleTheme}
          className={`p-2 rounded ${
            darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-800"
          }`}
        >
          Toggle Theme
        </button>
      </div>
    </header>
  );
}
export default Header;
