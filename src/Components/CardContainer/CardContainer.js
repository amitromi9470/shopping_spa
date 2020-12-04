import React from "react";
import "./CardContainer.css";

const CardContainer = (props) => {
  return (
    <div className="product">
      <div className="flex-container">{props.children}</div>
    </div>
  );
};

export default CardContainer;
