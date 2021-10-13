import React from "react";

const Textfield = () => {
  return (
    <>
      <form className="flex flex-row">
        <div>
          <label htmlFor="">Email Address</label>
        </div>
        <div>
          <input type="email" name="email" />
        </div>
      </form>
    </>
  );
};

export default Textfield;
