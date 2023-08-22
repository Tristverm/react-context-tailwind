import React from "react";

function Form() {
  return (
    <div className="container mx-auto mt-4 flex flex-row justify-center items-center">
      <form className="bg-gray-100 flex-1 flex flex-col justify-center ">
        <legend className="text-bold text-xl text-center ">
          Enter Details
        </legend>
        <div className="flex flex-row  my-8 ml-4">
          <label>Surname</label>
          <input className="flex-1 mx-2" />
        </div>
        <div className="flex flex-row my-8 self-left ml-4">
          <label>LastName</label>
          <input className="flex-1 mx-2" />
        </div>
        <div className="flex flex-row  my-8 self-left ml-4">
          <label>Other Names</label>
          <input className="flex-1 mx-2 w-8"  />
        </div>
        <div className="flex flex-row  my-8 self-left ml-4">
          <label>Surname</label>
          <input className="flex-1 mx-2" />
        </div>
      </form>
    </div>
  );
}

export default Form;
