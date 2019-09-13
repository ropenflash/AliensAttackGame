import React from "react";
import { skyAndGroundWidth } from "../utils/constants";

export default () => {
  const skyStyle = {
    fill: "#30abef"
  };
  const skyAndGroundWidth = 5000;
  const gameHeight = 1200;
  return (
    <rect
      style={skyStyle}
      x={skyAndGroundWidth / -2}
      y={100 - gameHeight}
      width={skyAndGroundWidth}
      height={gameHeight}
    />
  );
};
