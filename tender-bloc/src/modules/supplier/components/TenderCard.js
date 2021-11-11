import React from "react";

const TenderCard = () => {
  return (
    <div className="bg-white font-body text-base rounded-lg p-6 max-w-sm my-2">
      <div className="grid grid-cols-2">
        <img src="" alt="company-logo" />
        <h4 className="text-2xl">TENDER TITLE</h4>
      </div>
      <div className="my-4">
        <div className="grid grid-cols-2">
          <p>Client:</p>
          <p className="font-light">Company Name</p>
        </div>
        <div className="grid grid-cols-2">
          <p>Deadline:</p>
          <p className="font-light">day/month/year/time</p>
        </div>
      </div>
      <div className="space-x-5 text-right mr-7">
        <button className="primary-button">Register</button>
        <button className="primary-button">Bid Instruction</button>
      </div>
    </div>
  );
};

export default TenderCard;
