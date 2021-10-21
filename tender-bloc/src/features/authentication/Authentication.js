import { useMoralis } from "react-moralis";
import SignIn from "./SignIn";
import Home from "../../pages/Home";

const Authentication = () => {
  const { isAuthenticated, logout } = useMoralis();

  if (isAuthenticated) {
    return <Home />;
  }
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default Authentication;
