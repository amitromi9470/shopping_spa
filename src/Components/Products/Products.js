import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import CardContainer from "../CardContainer/CardContainer";

const Products = () => {
  const products = useSelector((state) => state.products);
  return (
    <CardContainer>
      {products.map((item) => (
        <Card
          id={item.id}
          logo={item.image}
          ProductName={item.title}
          ProductDescription={item.description}
          Price={item.price}
        />
      ))}
    </CardContainer>
  );
};

export default Products;
