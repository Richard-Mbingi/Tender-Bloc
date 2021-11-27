import React from "react";

const ProgressRing = (props) => {
  return (
    <div className="flex flex-col items-center">
      <svg width="200" height="200">
        <g transform="rotate(-90 100 100)">
          <circle
            r="50"
            cx="100"
            cy="100"
            fill="transparent"
            stroke={props.backgroundColor}
            strokeWidth="0.5rem"
            strokeDasharray="439.8"
            strokeDashoffset="0"
          />
          <circle
            r="50"
            cx="100"
            cy="100"
            fill="transparent"
            stroke={props.color}
            strokeWidth="0.5rem"
            strokeDasharray="360"
            strokeDashoffset={props.percentage}
          />
        </g>
        <text x="50%" y="50%" dominantBaseline="central" textAnchor="middle">
          85%
        </text>
      </svg>
      <p className="">{props.name}</p>
    </div>
  );
};

export default ProgressRing;
