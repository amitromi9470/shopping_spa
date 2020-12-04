import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import CardContainer from "../CardContainer/CardContainer";
import "./Cart.css"

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const isEmptyCart = cartItems.length === 0;

  return (
    <React.Fragment>
      {isEmptyCart && <div className="emptyCart">Your Cart is Empty</div>}
      <CardContainer>
        {cartItems.map((item) => (
          <Card
            id={item.id}
            logo={item.image}
            ProductName={item.title}
            ProductDescription={item.description}
            Price={item.price}
            inCart={true}
          />
        ))}
      </CardContainer>
    </React.Fragment>
  );
};

export default Cart;
