import React from "react";
import Skeleton from "react-loading-skeleton";

const skeleton = props => (
  <div
    className="w-100"
    style={{
      position: "absolute",
      width: props.width,
      height: props.height,
      bottom: "0"
    }}
  >
    <Skeleton height="100%" width="100%" />
  </div>
);

export default skeleton;
