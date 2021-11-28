import React from "react";
import OpenTenderCard from "./OpenTenderCard";
import { openTenderDetails } from "../data/open-tender-details";

const OpenTenderList = () => {
  return (
    <ul>
      {openTenderDetails.map((_card) => {
        return <OpenTenderCard cardDetails={_card} key={_card} />;
      })}
    </ul>
  );
};

export default OpenTenderList;
