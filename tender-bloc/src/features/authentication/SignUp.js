//TODO: Sign up functionality
//TODO: Add Company logo
//TODO: Create sign up form 
//TODO: Overlay text on background
//TODO: Already have an account link

import { useMoralis } from "react-moralis";
import signUpImg from "../../assets/images/sign_up_bg.png";

const signUpBg = {
  backgroundImage: `url(${signUpImg})`
}

const SignUp = () => {

  const {authenticate} = useMoralis()

  return (
    <>
      <div className="relative overflow-x-hidden bg-indigo-100">
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
                  Signing up is super quick
                </h3>
                <p className="mb-10 underline">Already have an account?</p>
                <form action="">
                  <input
                    className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-red-300 focus:border-red-300 rounded-md"
                    type="text"
                    placeholder="steven@example.dev"
                  />
                  <input
                    className="w-full mb-4 px-12 py-6 border border-gray-200 focus:ring-red-300 focus:border-red-300 rounded-md"
                    type="password"
                    placeholder="Password"
                  />
                  <input
                    className="w-full mb-10 px-12 py-6 border border-gray-200 focus:ring-red-300 focus:border-red-300 rounded-md"
                    type="password"
                    placeholder="Repeat password"
                  />
                  <label className="flex" for="">
                    <input className="mr-4 mt-1" type="checkbox" />
                    <span className="text-sm">
                      By signing up, you agree to our Terms, Data Policy and
                      Cookies.
                    </span>
                  </label>
                  <button className="mt-12 md:mt-16 bg-red-300 hover:bg-red-400 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">
                    Sign Up
                  </button>
                  <button onClick={() => authenticate} className="mt-12 md:mt-16 bg-red-300 hover:bg-red-400 text-white font-bold font-heading py-5 px-8 rounded-md uppercase">
                    Authenticate via Metamask
                  </button>
                </form>
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
          className="hidden lg:block lg:absolute top-0 bottom-0 right-0 lg:w-3/6 bg-center bg-cover bg-no-repeat" style={signUpBg}
        ></div>
      </div>
    </>
  );
};

export default SignUp;