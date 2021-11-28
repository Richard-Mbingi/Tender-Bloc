import React from "react";
import ProgressRing from "./ProgressRing";

const OpenTenderCard = (props) => {
  return (
    <div
      to="/"
      className="bg-white my-4 mx-12 shadow-md rounded-xl grid grid-cols-2 place-items-center"
    >
      <div className="grid grid-cols-2">
        <img src="/" alt="company-logo" />
        <div className="text-rhythm">
          <h2 className="font-body text-3xl font-light">Tender Name</h2>
          <p>Company Name</p>
        </div>
      </div>
      <div className="grid grid-cols-3 place-items-center">
        <div>
          <ProgressRing
            name="Mandatory Requirements"
            color="#5e71cd"
            backgroundColor="#F2F2FF"
            percentage="64"
          />
        </div>
        <div>
          <ProgressRing
            name="Technical Evaluation"
            color="#f57e5e"
            backgroundColor="#FDEEEA"
            percentage="70"
          />
        </div>
        <div>
          <ProgressRing
            name="Financial Qualification"
            color="#55d99d"
            backgroundColor="#d7f5eb"
            percentage="90"
          />
        </div>
      </div>
    </div>
  );
};

export default OpenTenderCard;
