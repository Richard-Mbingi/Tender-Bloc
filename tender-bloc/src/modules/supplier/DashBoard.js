//TODO: Default switch case

import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import DocumentRegistration from "./pages/DocumentRegistration";
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
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/prequalification" element={<Prequalification />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/asset-disposal" element={<AssetDisposal />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/document-registration" element={<DocumentRegistration />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashBoard;
