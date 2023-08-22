import React, { useContext } from "react";
import { themeContext } from "../contexts/ThemeProvider";

function Form() {
  let { darkMode } = useContext(themeContext);
  return (
    <div className="container mx-auto mt-4 flex flex-row justify-center items-center">
      <form
        className={`${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"
        } flex-1 flex flex-col justify-center rounded `}
      >
        <legend className="text-bold text-xl text-center ">
          Enter Details
        </legend>
        <div className="flex flex-row  my-8 ml-4">
          <label className="w-36">Surname</label>
          <input className="flex-1 mx-2 outline-none" />
        </div>
        <div className="flex flex-row my-8 self-left ml-4">
          <label className="w-36">LastName</label>
          <input className="flex-1 mx-2 outline-none " />
        </div>
        <div className="flex flex-row  my-8 self-left ml-4">
          <label className="w-36">Other Names</label>
          <input className="flex-1 mx-2 w-8 outline-none" />
        </div>
        <div className="flex flex-row  my-8 self-left ml-4">
          <label className="w-36">Surname</label>
          <input className="flex-1 mx-2 pl-4 outline-none placeholder:text-black text-black" />
        </div>
      </form>
    </div>
  );
}

export default Form;
