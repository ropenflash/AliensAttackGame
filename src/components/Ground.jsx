import React from "react";
import { skyAndGroundWidth } from "../utils/constants";

export default () => {
  const groundStyle = {
    fill: "#59a941"
  };
  const division = {
    stroke: "#458232",
    strokeWidth: "3px"
  };
  const skyAndGroundWidth = 5000;
  return (
    <g id="ground">
      <rect
        id="ground-2"
        data-name="ground"
        style={groundStyle}
        x={skyAndGroundWidth / -2}
        y={0}
        width={skyAndGroundWidth}
        height={100}
      ></rect>
      <line
        x1={skyAndGroundWidth / -2}
        y1={0}
        x2={skyAndGroundWidth / 2}
        y2={0}
        style={division}
      ></line>
    </g>
  );
};
