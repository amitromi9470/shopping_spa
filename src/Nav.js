import React from "react";
//import Buttonforcart from "./Components/Buttonforcart";
import { useSelector } from "react-redux";

import "./Nav.css";
import { Link } from "react-router-dom";
import logo2 from "./Assets/shopping_cart.png";

const Nav = () => {
  const cartCount = useSelector((state) => state.cartCount);

  return (
    <nav>
      <ul className="nav-links">
        <Link to="./products">
          <li>Products</li>
        </Link>
        <Link to="./Login">
          <li>Login</li>
        </Link>
        <Link to="./cart">
          <li>Cart</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
