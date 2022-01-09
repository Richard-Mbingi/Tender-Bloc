import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogleLogin } from "react-icons/fc";

import logo from "../assets/image/logo.png";
import backgroundImg from "../assets/image/background.png";

const SignIn = () => {
  return (
    <div className="flex flex-wrap sm:flex-row items-stretch h-screen">
      <div className="bg-indigo-50 w-full md:w-1/2">
        <img src={logo} width="150" alt="logo" />
        <div className="h-full mx-14 flex flex-col justify-between">
          <div>
            <h1 className="font-mono text-4xl">Sign In</h1>
            <p className="font-light underline">Create an account</p>
          </div>
          <div className="bg-white rounded-t-2xl shadow-lg flex justify-center flex-col-reverse">
            <div className="py-5 px-10 flex flex-col items-center">
              <div className="text-indigo-800 hover:text-red-300">
                <p className="">Email</p>
                <input
                  className="mb-4 border-2 border-indigo-800 hover:border-red-300 py-2 pl-4 font-light rounded-md"
                  type="email"
                  name="Email"
                  id="email"
                />
              </div>
              <div className="text-indigo-800 hover:text-red-300">
                <p>Password</p>
                <input
                  className="mb-4 border-2 border-indigo-800 hover:border-red-300 py-2 pl-4 font-light rounded-md"
                  type="password"
                  name="Password"
                  id="password"
                />
              </div>
              <div className="text-indigo-800 hover:text-red-300">
                <p>Account Type</p>
                <input
                  className="mb-4 border-2 border-indigo-800 hover:border-red-300 py-2 pl-4 font-light rounded-md"
                  type="email"
                  name="Email"
                  id="email"
                />
              </div>
              <p className="font-light underline">Forgot your password?</p>
              <button className="w-28 bg-red-300 py-2 rounded-md text-white hover:text-red-300 hover:bg-white hover:border-2 hover:border-red-300 transition ease-in-out">
                Sign In
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden md:flex items-center text-right flex-row-reverse px-10 bg-cover w-1/2"
        style={{ backgroundImage: `url('${backgroundImg}')` }}
      >
        <div className="flex sm:w-1/2 xl:w-3/5 flex-col gap-10">
          <h1 className="text-5xl font-mono font-medium text-white">
            Let Us Do the<br/>Heavy Lifting for You
          </h1>
          <p className="text-white font-light">
            Unlock the unlimited potential of the Ethereum technology in your Tender Procurement
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
