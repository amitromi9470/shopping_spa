import React from "react";
import "./About.css";
import Card from "../Card/Card";
//import logo1 from "../../Assets/online-shopping.jpg";
import { DummyData } from "../../Data/Dummydata";

const About = () => {
  return (
    <div className="About">
      <h1>WelCome To cart</h1>
      <div className="flex-container2">
        {DummyData.map((item) => (
          <Card
            logo={item.logo}
            ProductName={item.name}
            ProductDescription={item.description}
            Rating={item.rating}
            Price={item.price}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
