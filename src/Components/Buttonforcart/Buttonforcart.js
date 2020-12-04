import React from "react";
import "./Buttonforcart.css";
import { useDispatch, useSelector } from "react-redux";

const Buttonforcart = (props) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);
  const buttonClassId = `button${props.id}`;

  const addToCartHandler = () => {
    const productAdded = products.find((product) => product.id === props.id);
    dispatch({
      type: "ADD_TO_CART",
      payload: productAdded,
    });
  };
  return (
    <div className="addToCart">
      <div id={buttonClassId} className="button" onClick={addToCartHandler}>
        Add To Cart
      </div>
    </div>
  );
};

export default Buttonforcart;
