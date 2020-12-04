import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import "./App.css";
import Login from "./Components/Login/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./Components/Products/Products";
import Nav from "./Nav";
import Cart from "./Components/Cart/Cart";
import Register from "./Components/Register/Register";
//import logo2 from "./Assets/shopping_cart.png";

const App = () => {
  useEffect(() => {
    fetchApi();
  });
  const dispatch = useDispatch();

  const fetchApi = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .then();
    dispatch({
      type: "FETCH_API",
      payload: response.data,
    });
  };

  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/products" exact component={Products} />
          <Route path="/login" exact component={Login} />
          <Route path="/cart" exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
