import React from "react";

const Textfield = () => {
  return (
    <>
      <form className="flex flex-col mb-4 px-6">
        <div className="mb-1">
          <label htmlFor="" className="font-body text-lg">
            Email Address
          </label>
        </div>
        <div>
          <input
            type="email"
            name="email"
            className="text-sm font-body pl-3 pr-10 py-3 border-2 border-red-300 rounded-md min-w-full"
          />
        </div>
      </form>
    </>
  );
};

export default Textfield;
