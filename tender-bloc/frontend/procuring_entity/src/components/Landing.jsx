import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-5xl font-mono">Landing</h1>
      <Link to="/sign-in" className="underline hover:text-red-300">Sign In</Link>
    </div>
  );
};

export default Landing;
