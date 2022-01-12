import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import {
  Navbar,
  Feed,
  TenderDetail,
  CreateTender,
  Search,
} from "../components";

const Tenders = ({ user }) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="px-2 md:px-5 w-full">
      <Navbar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        user={user}
      />
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route
            path="/tender-detail/:tenderId"
            element={<TenderDetail user={user} />}
          />
          <Route path="/create-tender" element={<CreateTender user={user} />} />
          <Route
            path="/search"
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Tenders;
