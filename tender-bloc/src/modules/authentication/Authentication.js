import { useMoralis } from "react-moralis";
import DashBoard from "../supplier/DashBoard";
import Landing from './pages/Landing';

const Authentication = () => {
  const { isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    return <DashBoard />;
  }
  return (
    <div>
      <Landing />
    </div>
  );
};

export default Authentication;
