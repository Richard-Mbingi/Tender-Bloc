//TODO: Default switch case

import { Route, Switch } from "react-router";
import { SideBar } from "./components/SideBar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import Prequalification from "./pages/Prequalification";
import Compliance from "./pages/Compliance";
import AssetDisposal from "./pages/AssetDisposal";
import Settings from "./pages/Settings";
import { InfoBar } from "./components/InfoBar";

const DashBoard = () => {
  return (
    <div className=" grid grid-cols-3">
      <SideBar className="col-span-1 col-end-1" />
      <div className="col-span-3 bg-primary px-8 min-h-screen">
        <InfoBar />
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/discover" component={Discover} />
          <Route path="/prequalification" component={Prequalification} />
          <Route path="/compliance" component={Compliance} />
          <Route path="/asset-disposal" component={AssetDisposal} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </div>
  );
};

export default DashBoard;
