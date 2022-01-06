//TODO: Default switch case

import { Route, Routes } from "react-router-dom";
import { SideBar } from "./components/SideBar";
import Home from "./pages/Home";
import Discover from "./pages/Discover";
import DocumentRegistration from "./pages/DocumentRegistration";
import OpenTenders from "./pages/OpenTenders";
import ClosedTenders from "./pages/ClosedTenders";
import Prequalification from "./pages/Prequalification";
import PostQualification from "./pages/PostQualification";
import Financials from "./pages/Financials";
import Settings from "./pages/Settings";
import { InfoBar } from "./components/InfoBar";

const DashBoard = () => {
  return (
    <div className=" grid grid-cols-3">
      <SideBar className="col-span-1 col-end-1" />
      <div className="col-span-3 bg-magnolia px-8 min-h-screen">
        <InfoBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route
            path="/home/document-registration"
            element={<DocumentRegistration />}
          >
            <Route path="document-name" />
          </Route>
          <Route path="/discover" element={<Discover />} />
          <Route path="/prequalification" element={<Prequalification />} />
          <Route path="/open-tenders" element={<OpenTenders />} />
          <Route path="/post-qualification" element={<PostQualification />} />
          <Route path="/closed-tenders" element={<ClosedTenders />} />
          <Route path="/financials" element={<Financials />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashBoard;
