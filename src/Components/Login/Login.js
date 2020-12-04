import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";

const Login = (props) => {
  const registeredUsers = useSelector((state) => state.register);
  const loggedInUser = useSelector((state) => state.login);
  const dispatchLogin = useDispatch();

  const [validEmail, setValidEmail] = useState("");
  const [validPassword, setValidPassword] = useState("");
  const [loginSuccessful, setLoginSuccessful] = useState(false);
  const [loginMsg, setLoginMsg] = useState(true);

  const successfulLogin = (
    <div>
      <h1>Login SuccessFul</h1>
      <h2>welCome {loggedInUser}</h2>
    </div>
  );
  //const welcomeUser=<h2>WelCome</h2>
  const failedLogin = (
    <h1>Login Failed(Please Provide Valid Email and Password)</h1>
  );

  const onClickHandler = () => {
    const registeredEmails = registeredUsers.map((user) => user.email);
    const registeredPassword = registeredUsers.map((user) => user.password);

    const isEmailCorrect = registeredEmails.includes(validEmail);
    const isPasswordCorrect = registeredPassword.includes(validPassword);

    const loggedInDetails = registeredUsers.map((eachUser) => {
      if (eachUser.email === validEmail) {
        return eachUser.firstName;
      } else return null;
    });

    if (isEmailCorrect && isPasswordCorrect) {
      setLoginSuccessful(true);
    } else {
      setLoginMsg(false);
    }
    dispatchLogin({
      type: "USER_LOGGED_IN",
      payload: loggedInDetails,
    });
  };

  return !loginSuccessful ? (
    <div className="login">
      <div className="loginContainer">
        <div className="loginRow">
          <p>E-mail</p>
          <input
            className="loginInput"
            type="email"
            onChange={(e) => setValidEmail(e.target.value)}
          />
        </div>
        <div className="loginRow">
          <p>Password</p>
          <input
            className="loginInput"
            type="password"
            onChange={(e) => setValidPassword(e.target.value)}
          />
        </div>
        <Button onClickHandler={onClickHandler} value="Log In" />
        {!loginMsg && failedLogin}
      </div>
    </div>
  ) : (
    successfulLogin
  );
};

export default Login;
