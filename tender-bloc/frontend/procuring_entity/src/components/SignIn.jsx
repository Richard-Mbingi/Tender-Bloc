import React from "react";
import GoogleLogin from "react-google-login";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

import logo from "../assets/image/logo.png";
import backgroundImg from "../assets/image/background.png";

import { client } from "../client";

const SignIn = () => {
  const navigate = useNavigate();

  //*fetch user sign-in info from google response
  const responseGoogle = (response) => {
    localStorage.setItem("user", JSON.stringify(response.profileObj));

    const { name, googleId, imageUrl } = response.profileObj;

    const doc = {
      _id: googleId,
      _type: "user",
      userName: name,
      image: imageUrl,
    };

    client.createIfNotExists(doc).then(() => {
      navigate("/home", { replace: true });
    });
  };

  return (
    <div className="flex flex-wrap sm:flex-row items-stretch h-screen">
      <div className="bg-indigo-50 w-full md:w-1/2 px-10">
        <img className="py-5" src={logo} width="150" alt="logo" />
        <div className="mx-14 flex flex-col gap-y-10">
          <div>
            <h1 className="font-mono text-4xl">Sign In</h1>
            <p className="font-light underline">Create an account</p>
          </div>
          <div className="bg-white min-w-fit md:w-full rounded-2xl shadow-lg flex justify-center py-6 self-center">
            <div className="py-5 px-10 flex flex-col items-center">
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}
                render={(renderProps) => (
                  <button
                    type="button"
                    className="p-4 flex flex-row justify-center items-center gap-2 bg-slate-100 rounded-md border-indigo-800 hover:shadow-md transition ease-in-out w-56"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    Sign in with Google <FcGoogle />
                  </button>
                )}
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy="single_host_origin"
              />

              <p className="text-center">or</p>
              <div className="text-indigo-800 hover:text-red-400">
                <p className="">Email</p>
                <input
                  className="mb-4 border-2 border-indigo-800 hover:border-red-400 py-2 pl-4 font-light rounded-md focus:border-red-400 focus:text-red-400 focus:outline-none"
                  type="email"
                  name="Email"
                  id="email"
                />
              </div>
              <div className="text-indigo-800 hover:text-red-400">
                <p>Password</p>
                <input
                  className="mb-4 border-2 border-indigo-800 hover:border-red-400 py-2 pl-4 font-light rounded-md focus:border-red-400 focus:text-red-400 focus:outline-none"
                  type="password"
                  name="Password"
                  id="password"
                />
              </div>
              <p className="font-light underline pb-5">Forgot your password?</p>
              <button className="w-28 bg-red-400 py-2 rounded-md text-white hover:text-red-400 hover:bg-white hover:border-2 hover:border-red-400 transition ease-in-out">
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
            Let Us Do the
            <br />
            Heavy Lifting for You
          </h1>
          <p className="text-white font-light">
            Unlock the unlimited potential of the Ethereum technology in your
            Tender Procurement
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
