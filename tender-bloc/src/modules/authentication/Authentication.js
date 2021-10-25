import { useMoralis } from "react-moralis";
import SignIn from "./pages/SignIn";
import DashBoard from "../supplier/DashBoard";

const Authentication = () => {
  const { isAuthenticated} = useMoralis();

  if (isAuthenticated) {
    return <DashBoard />;
  }
  return (
    <div>
      <SignIn />
    </div>
  );
};

export default Authentication;
