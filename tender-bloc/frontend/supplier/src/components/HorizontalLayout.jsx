import React from "react";

import Tender from "./Tender";

const HorizontalLayout = ({ tenders }) => {
  return (
    <div>
      {tenders?.map((tender) => (
        <Tender key={tender._id} tender={tender} className="w-max" />
      ))}
    </div>
  );
};

export default HorizontalLayout;
