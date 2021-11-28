import React from "react";
import TenderCard from "./TenderCard";
import { tenderDetails } from "../data/tender-details";

const CardList = () => (
  <ul className="flex overflow-y-hidden overflow-x-scroll space-x-5 ">
    {tenderDetails.map((_card) => {
      return <TenderCard cardDetails={_card} key={_card} />;
    })}
  </ul>

);

export default CardList;
