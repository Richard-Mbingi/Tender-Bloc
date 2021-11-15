import { Switch, Route } from "react-router";
import { useMoralis } from "react-moralis";
import DashBoard from "./modules/supplier/DashBoard";
import Landing from "./modules/authentication/pages/Landing";
import SignIn from "./modules/authentication/pages/SignIn";
import SignUp from "./modules/authentication/pages/SignUp";
import DocumentRegistration from "./modules/supplier/pages/DocumentRegistration";

const App = () => {
  const { isAuthenticated } = useMoralis();

  if (isAuthenticated) {
    return <DashBoard />;
  }
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Landing} />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/document-registration" component={DocumentRegistration} />
      </Switch>
    </div>
  );
};

export default App;
