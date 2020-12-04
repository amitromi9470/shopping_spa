import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div className = "loginButtonContainer">
      <div className="loginButton">{props.value}</div>
    </div>
  );
};
export default Button;
