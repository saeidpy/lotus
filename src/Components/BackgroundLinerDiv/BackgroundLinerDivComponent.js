import React from "react";
import { useStyle } from "./BackgroundLinerDiv.style.js";
import PropTypes from "prop-types";

/**
 * write document
 */

export default function BackgroundLinerDivComponent(props) {
  const classes = useStyle();
  const { state, setState } = props;
  return (
    <div
      style={{
        width: "1100px",
        left: "-258px",
        top: "1px",
        height: "111vh",
        position: "absolute",
        background:
          "linear-gradient(224.34deg, rgb(120, 255, 214) 3.69%, rgb(0, 121, 145) 133.19%)",
        borderRadius: "45px 118px",
        transform: "skewX(-25deg)",
        zIndex:"-1"
      }}
    />
  );
}

BackgroundLinerDivComponent.propTypes = {
  /**
   * write document
   */
  state: PropTypes.string,
  /**
   * write document
   */
  setState: PropTypes.func,
  /**
   * write document
   */
  props: PropTypes.object,
};

BackgroundLinerDivComponent.defaultProps = {
  /**
   * write document
   */
  state: "hello world",
};
