import React from "react";

import { pathFromBezierCurve } from "../utils/formula";

const CannonBase = props => {
  const cannonBaseStyle = {
    fill: "#a16012",
    stroke: "#75450e",
    strokeWidth: "2px"
  };
  const baseWidth = 80;
  const halfbase = 40;
  const height = 60;
  const negativeHeight = height * -1;
  const cubicBezierCurve = {
    initialAxis: {
      x: -halfbase,
      y: height
    },
    initialControlPoint: {
      x: 20,
      y: negativeHeight
    },
    endingControlPoint: {
      x: 60,
      y: negativeHeight
    },
    endingAxis: {
      x: baseWidth,
      y: 0
    }
  };
  return (
    <g>
      <path
        style={cannonBaseStyle}
        d={pathFromBezierCurve(cubicBezierCurve)}
      ></path>
      <line
        x1={-halfbase}
        y1={height}
        x2={halfbase}
        y2={height}
        style={cannonBaseStyle}
      ></line>
    </g>
  );
};

export default CannonBase;
