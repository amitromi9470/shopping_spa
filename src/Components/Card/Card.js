import React from "react";
import "./Card.css";
import Buttonforcart from "../Buttonforcart/Buttonforcart";

const Card = (props) => {
  const imgStyle = {
    height: "120px",
    width: "200px",
  };
  return (
    <div className="Card">
      <div className="cardContainer">
        <div>
          <img
            className="image"
            src={props.logo}
            style={imgStyle}
            alt="dummy"
          />
        </div>
        <div>
          <p>
            <h1>${props.Price}</h1>
          </p>
        </div>
        {!props.inCart && <Buttonforcart id={props.id} />}
        <div>
          <h1>{props.ProductName}</h1>\
        </div>
        <div>
          <p className="description">
            <b>{props.ProductDescription}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
