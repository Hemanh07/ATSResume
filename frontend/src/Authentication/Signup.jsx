import React from "react";
import { useNavigate } from 'react-router-dom'

import '../styles/signup.css'
import '../styles/login.css'
const handleSubmit = (event) => {
  event.preventDefault();
};
const Signup = () => {
  const navigate = useNavigate();
  
  return (
    <div className="container">
      <form action="post" onSubmit={handleSubmit}>

        <label htmlFor="firstName">First Name :</label>
        <input type="text" name="firstName" id="firstName" />
        <label htmlFor="lastName">Last Name :</label>
        <input type="text" name="lastName" id="lastName" />
        <label htmlFor="userName">User Name :</label> 
                <input type="text" name="userName" id="userName" required /> 
        <label htmlFor="emailId">Email Id :</label>
        <input type="text" name="emailId" id="emailId" />
        <label htmlFor="password">Password :</label>{" "}
        <input type="password" name="password" id="password" />
        <label htmlFor="confrimPassword">ConfrimPassword :</label>{" "}
        <input type="password" name="confrimpassword" id="confrimpassword" />
        <button type="submit" className="SignUpButton" onClick={() => navigate("/login")}>
          Sign Up
        </button>
        <i>Already have an Account ?? <span onClick={()=>navigate('/login')}>Login</span></i>
      </form>
    </div>
  );
};

export default Signup;
