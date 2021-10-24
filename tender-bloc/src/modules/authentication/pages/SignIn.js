import { Link } from "react-router-dom";
import { useState } from "react";
import { useMoralis } from "react-moralis";
import signUpImg from "../../../global/assets/images/sign_up_bg.png";

const signInBg = {
  backgroundImage: `url(${signUpImg})`,
};

const SignIn = () => {
  const { login } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const { authError } = useMoralis();

  return (
    <>
      <div className="relative overflow-x-hidden bg-indigo-100">
        {authError && (
          <div>
            <h1>Authentication has failed</h1>
            <p>{authError.message}</p>
          </div>
        )}
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-full lg:w-2/6 px-4 mb-12 lg:mb-0">
              <div className="py-20 text-center">
                <a
                  className="inline-block mb-14 text-3xl font-bold font-heading"
                  href="/"
                >
                  <img
                    className="h-9"
                    src="yofte-assets/logos/yofte-logo.svg"
                    alt=""
                    width="auto"
                  />
                </a>
                <h3 className="mb-8 text-4xl md:text-5xl font-bold font-heading">
                  Welcome Back
                </h3>
                <div>
                  <input
                    value={email}
                    type="email"
                    placeholder="steven@example.dev"
                    onChange={(event) => setEmail(event.currentTarget.value)}
                    className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-red-300 focus:border-red-300 rounded-md"
                  />
                  <input
                    value={password}
                    type="password"
                    placeholder="Password"
                    onChange={(event) => setPassword(event.currentTarget.value)}
                    className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-red-300 focus:border-red-300 rounded-md"
                  />
                  <label className="flex" htmlFor="">
                    <input className="mr-4 mt-1" type="checkbox" />
                    <span className="text-sm">
                      By signing up, you agree to our Terms, Data Policy and
                      Cookies.
                    </span>
                  </label>
                  <Link to="/signIn" className="mb-10 underline">
                    Create an account
                  </Link>
                  <button
                    onClick={() => login(email, password)}
                    className="mt-12 md:mt-16 bg-red-300 hover:bg-red-400 text-white font-bold font-heading py-5 px-8 rounded-md uppercase"
                  >
                    Sign In
                  </button>
                </div>
              </div>
              <img
                className="lg:hidden h-96 w-full object-cover"
                src={signUpImg}
                alt="sign_up"
              />
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:absolute top-0 bottom-0 right-0 lg:w-3/6 bg-center bg-cover bg-no-repeat"
          style={signInBg}
        ></div>
      </div>
    </>
  );
};

export default SignIn;