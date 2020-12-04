import React, { useState } from "react";
import {useDispatch,useSelector} from "react-redux";
import "./Register.css";


const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful,setSuccessful] = useState(false);

  const dispatchRegister = useDispatch();
  const registeredUser = useSelector(state => state.register)
  console.log(registeredUser)

  const SuccessComponent = <h1>REGISTRATION SUCCESSFUL!!!</h1>

  const onSubmitHandler = (e) => {
    e.preventDefault();
      const registeredDetails={
          firstName,
          lastName,
          email,
          password
      }
    dispatchRegister({
        type:"USER_REGISTRATION",
        payload:registeredDetails
    })
    setSuccessful(true);
  };

  return !successful ? (
    <form className="Register" >
      <h1>Enter FirstName</h1>
      <input
        type="text"
        name="firstName"
        placeholder="Enter First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <h1>Enter LastName</h1>
      <input
        type="text"
        name="lastName"
        placeholder="Enter last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <h1>Enter e-mail id</h1>
      <input
        type="email"
        name="email"
        placeholder="Enter Valid email-id"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <h1>Enter Password</h1>
      <input
        type="password"
        name="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <div>
        <input type="submit" className="button2" value="Submit" onClick={onSubmitHandler}/>
      </div>
    </form>
  ): SuccessComponent;
};

export default Register;
