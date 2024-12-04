import React, { useContext } from "react";
import '../styles/signup.css'
import '../styles/login.css'
import AuthenticationFooter from "../Components/AuthenticationFooter";
import InputField from "../Components/InputField";
import PasswordField from "../Components/PasswordField";
import SubmitButton from "../Components/SubmitButton";
import { handleDataChange } from "../EventHandler/handleChange";
import handleSignUpSubmit from "../EventHandler/handleSignUp";
import { UserDataContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  let { userDetails, setUserDetails, setIsLoggedIn } = useContext(UserDataContext);
  const navigate = useNavigate();

  return (
    <div className="container">
      <form
        action="post"
        onSubmit={(event) => handleSignUpSubmit(event, navigate, userDetails, setIsLoggedIn)}
        onChange={(event) => handleDataChange(event, userDetails, setUserDetails)}
      >

        <InputField
          fieldName="firstName"
          inputType="text"
        />
        <InputField
          fieldName="lastName"
          inputType="text"
        />
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
        <PasswordField
          fieldName='confrimPassword'
        />
        <SubmitButton
          fieldName='signup'
          target='login'
        />
        <AuthenticationFooter
          query="Already have an Account"
          target='login'
        />
      </form>
    </div>
  );
};

export default Signup;
