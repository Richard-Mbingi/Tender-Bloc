import React from "react";

const Page = (props) => {
  return (
    <div className="ml-52">
      <h1 className="dashboard-label">{props.name}</h1>
      {props.children}
    </div>
  );
};

export default Page;
