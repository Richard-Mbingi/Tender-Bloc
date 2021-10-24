import { useMoralis } from "react-moralis";
import SignIn from "./pages/SignIn";
import Home from "../../modules/supplier/pages/Home";

const Authentication = () => {
  const { isAuthenticated} = useMoralis();

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
