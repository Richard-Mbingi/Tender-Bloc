import React from "react";

const Page = (props) => {
  return (
    <div>
      <h1 className="dashboard-label">{props.name}</h1>
      {props.children}
    </div>
  );
};

export default Page;
