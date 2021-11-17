import React from "react";

const TenderCard = (props) => {
  return (
    <div className="card-template">
      <div className="grid grid-cols-2">
        <img src="" alt="company-logo" />
        <h4 className="text-2xl">{props.cardDetails.tenderTitle}</h4>
      </div>
      <div className="my-4">
        <div className="grid grid-cols-2">
          <p>Client:</p>
          <p className="font-light">{props.cardDetails.client}</p>
        </div>
        <div className="grid grid-cols-2">
          <p>Deadline:</p>
          <p className="font-light">{props.cardDetails.deadline}</p>
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
