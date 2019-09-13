import React from "react";
import Sky from "./Sky";
import Ground from "./Ground";
import CannonBase from "./CannonBase";
import CannonPipe from "./CannonPipe";
import PropTypes from "prop-types";

const Canvas = props => {
  const style = {
    border: "1px solid black"
  };
  const viewBox = [
    window.innerWidth / -2,
    100 - window.innerHeight,
    window.innerWidth,
    window.innerHeight
  ];

  return (
    <div onMouseMove={props.trackMouse}>
      <svg
        id="aliens-go-home-canvas"
        viewBox={viewBox}
        preserveAspectRatio="xMaxYMax none"
        onMouseMove={props.trackMouse}
      >
        <Sky />
        <Ground />
        <CannonPipe rotation={props.angle} />
        <CannonBase />
      </svg>
    </div>
  );
};

Canvas.propTypes = {
  angle: PropTypes.number.isRequired,
  trackMouse: PropTypes.func.isRequired
};
export default Canvas;
