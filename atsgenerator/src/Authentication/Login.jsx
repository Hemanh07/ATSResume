import { React, useContext } from "react";
import "../styles/login.css";
import { useNavigate } from "react-router-dom";
import InputField from "../Components/InputField";
 import PasswordField from "../Components/PasswordField";
import { UserDataContext } from "../Context/LoginContext";
import {handleLoginSubmit} from '../EventHandler/handleLogin'
import { handleDataChange } from "../EventHandler/handleChange";

const Login = () => {
  const navigate = useNavigate();
  const {userDetails,setUserDetails} = useContext(UserDataContext);
  return (
    <div 
        className="container"
    >
      <form
	  		onSubmit={(event)=>handleLoginSubmit(event,navigate)}
        onChange={(event)=>handleDataChange(event,userDetails,setUserDetails) }
		  >
        <InputField 
          fieldName="userName" 
          inputType="text" 
        />
        <InputField 
          fieldName="email" 
          inputType="email" 
        />
        <PasswordField 
          fieldName='password' 
        />

        <button type="submit" className="loginButton">
          Login
        </button>
        <i>
          Don't have an Account ??{" "}
          <span 
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </span>
        </i>
      </form>
    </div>
  );
};

export default Login;
