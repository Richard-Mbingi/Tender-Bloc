//TODO:Default to Home page on authentication

import { Routes, Route } from "react-router-dom";
import { useMoralis } from "react-moralis";
import DashBoard from "./modules/supplier/DashBoard";
import Landing from "./modules/authentication/pages/Landing";
import SignIn from "./modules/authentication/pages/SignIn";
import SignUp from "./modules/authentication/pages/SignUp";

const App = () => {
  const { isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    return <DashBoard />;
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
