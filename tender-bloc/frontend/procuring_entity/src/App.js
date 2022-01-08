import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignIn from "./components/SignIn"
import Home from "./container/Home"
import Landing from "./components/Landing"

const App = () => {
  return (
    <Routes>
      <Route path="sign-in" element={<SignIn />} />
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  );
};

export default App;
