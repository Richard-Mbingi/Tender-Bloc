import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./containers/Home";
import SignIn from "./components/SignIn";

const App = () => {
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/home" element={<Home />} />
    <Route path="/sign-in" element={<SignIn />} />
  </Routes>;
};

export default App;
