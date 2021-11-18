import React from "react";

const TenderCard = (props) => {
  const _tenderTitle = props.cardDetails.tenderTitle;
  const _client = props.cardDetails.client;
  const _deadline = props.cardDetails.deadline;

  return (
    <div className="card-template">
      <div className="grid grid-cols-2">
        <img size={10} src="" alt="company-logo" />
        <h4 className="text-lg">{_tenderTitle}</h4>
      </div>
      <div className="my-2">
        <div className="grid grid-cols-2">
          <p className="text-base">Client:</p>
          <p className="font-light text-sm">{_client}</p>
        </div>
        <div className="grid grid-cols-2">
          <p className="text-base">Deadline:</p>
          <p className="font-light text-sm">{_deadline}</p>
        </div>
      </div>
      <div className="absolute right-5 bottom-5 space-x-5 text-right">
        <button className="primary-button">Register</button>
        <button className="primary-button">Bid Instruction</button>
      </div>
    </div>
  );
};

export default TenderCard;
