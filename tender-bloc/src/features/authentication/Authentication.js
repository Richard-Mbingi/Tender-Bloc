import { useMoralis } from "react-moralis";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

const Authentication = () => {
  const { isAuthenticated, authError, logout} = useMoralis();

  if (isAuthenticated) {
    return (
      <div>
        <h1>You're logged in 😬</h1>
        <p>Welcome to TenderBloc</p>
        <button onClick={() => logout()}>Sign Out</button>
      </div>
    );
  }
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default Authentication;
