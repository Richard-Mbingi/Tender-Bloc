import React from "react";

const Form = () => {
  return (
    <div className="flex flex-col m-32">
      <h1 className="text-xl font-bold">Sign In</h1>
      <form action="" method="post" className="flex flex-col">
        <label htmlFor="name">Username</label>
        <input id="name" type="text" required className="border" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" required className="border" />
        <button
          type="submit"
          className="mt-10 max-w-sm border-2 border-purple-700 p-4 self-center hover:bg-purple-700 hover:text-white"
        >
          Sign In
        </button>
      </form>
    </div>
  );
};

export default Form;
