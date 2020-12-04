import React from "react";
import "./App.css";
import Login from "./Components/Login/Login";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import About from "./Components/About/About";
import Nav from "./Nav";
import Register from "./Components/Register/Register";
//import logo2 from "./Assets/shopping_cart.png";


const App = () => {
  return (
    <div className="App">
        <Router>
          <Nav/>
          <Switch>
            <Route path="/about" exact component={About}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/Register" exact component={Register}/>
            
           </Switch> 
        </Router>
      </div>
    
    
  );
};

export default App;
