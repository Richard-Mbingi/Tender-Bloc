import { Switch, Route } from "react-router-dom";
import { useMoralis } from "react-moralis";
import DashBoard from "./modules/supplier/DashBoard";
import Landing from "./modules/authentication/pages/Landing";
import SignIn from "./modules/authentication/pages/SignIn"
import SignUp from "./modules/authentication/pages/SignUp"

const App = () => {
  const { isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    return <DashBoard />;
  }
  return (
    <div>
      <Landing />
      <Switch>
        <Route path="/sign-in" component={SignIn}/>
        <Route path="/sign-up" component={SignUp}/>
      </Switch>
    </div>
  );
};

export default App;
