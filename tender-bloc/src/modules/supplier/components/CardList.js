import React from "react";
import TenderCard from "./TenderCard";
import { tenderDetails } from "../data/tender-details";

const CardList = () => (
  <ul className="flex overflow-y-hidden overflow-x-scroll space-x-5 ">
    {tenderDetails.map((card) => {
      return <TenderCard cardDetails={card} key={card} />;
    })}
  </ul>

);

export default CardList;
