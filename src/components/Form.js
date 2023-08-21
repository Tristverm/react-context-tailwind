import React from "react";

function Form() {
  return (
    <div className="container mx-auto mt-4 flex flex-row justify-center items-center">
      <form className="bg-gray-100 flex-1 flex flex-col justify-center ">
        <legend className="text-bold text-xl text-center ">
          Enter Details
        </legend>
        <div className="flex flex-row space-x-16 my-8 self-center">
          <label>Surname</label>
          <input />
        </div>
        <div className="flex flex-row space-x-16 my-8 self-center">
          <label>Surname</label>
          <input />
        </div>
        <div className="flex flex-row space-x-16 my-8 self-center">
          <label>Surname</label>
          <input />
        </div>
        <div className="flex flex-row space-x-16 my-8 self-center">
          <label>Surname</label>
          <input />
        </div>
      </form>
    </div>
  );
}

export default Form;
