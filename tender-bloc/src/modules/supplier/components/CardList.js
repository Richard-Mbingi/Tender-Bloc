import React from "react";
import TenderCard from "./TenderCard";
import { tenderDetails } from "../data/tender-details";

const CardList = () => (
  <ul className="flex flex-wrap min-w-full space-x-4 flex-row ">
    {tenderDetails.map((card) => {
      return <TenderCard cardDetails={card} />;
    })}
  </ul>
);

export default CardList;
