import { useState } from "react";
import { useMoralis } from "react-moralis";

const SignUp = () => {
  const { signup } = useMoralis;
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="flex flex-col m-32">
      <h1 className="text-xl font-bold">Sign Up</h1>
      <form action="" method="post" className="flex flex-col">
        <label htmlFor="name">Email</label>
        <input
          value={email}
          id="name"
          type="text"
          required
          onChange={(e) => setEmail(e.currentTargetvalue)}
          className="border"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          id="password"
          type="password"
          required
          onChange={(e) => setPassword(e.currentTarget.value)}
          className="border"
        />
        <button
          type="submit"
          onClick={() => signup(email, password, email)}
          className="mt-10 max-w-sm border-2 border-purple-700 p-4 self-center hover:bg-purple-700 hover:text-white"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

const SignIn = () => {
  const { login } = useMoralis();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="flex flex-col m-32">
      <h1 className="text-xl font-bold">Sign In</h1>
      <form action="" method="post" className="flex flex-col">
        <label htmlFor="name">Email</label>
        <input
          value={email}
          id="name"
          type="text"
          required
          onChange={(e) => setEmail(e.currentTargetvalue)}
          className="border"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          id="password"
          type="password"
          required
          onChange={(e) => setPassword(e.currentTarget.value)}
          className="border"
        />
        <button
          type="submit"
          onClick={() => login(email, password, email)}
          className="mt-10 max-w-sm border-2 border-purple-700 p-4 self-center hover:bg-purple-700 hover:text-white"
        >
          Sign In
        </button>
      </form>
    </div>
  )
};

export const Auth = () => {
  const {authenticate, authError, isAuthenticating} = useMoralis();
  
  return (
    {}
  )
}

export default Auth;
