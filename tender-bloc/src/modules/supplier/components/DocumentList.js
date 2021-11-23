import React from "react";
import { BsFillCircleFill } from "react-icons/bs";

const DocumentList = (props) => {
  return (
    <div className="secondary-link flex items-center gap-4">
      <BsFillCircleFill size={15}/>
      <p className="font-semibold cursor-pointer">
        {props.name}
      </p>
    </div>
  );
};

export default DocumentList;
