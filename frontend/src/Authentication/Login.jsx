import { React, useContext } from "react";
import "../styles/login.css";
import InputField from "../Components/InputField";
import PasswordField from "../Components/PasswordField";
import { handleLoginSubmit } from '../EventHandler/handleLogin'
import { handleDataChange } from "../EventHandler/handleChange";
import SubmitButton from "../Components/SubmitButton";
import AuthenticationFooter from "../Components/AuthenticationFooter";
import { UserDataContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";

const Login = () => {

  let { userDetails, setUserDetails, setIsLoggedIn } = useContext(UserDataContext);
  const navigate = useNavigate();

  return (
    <div
      className="container"
    >
      <form
        method="post"
        onSubmit={(event) => handleLoginSubmit(event, navigate, userDetails, setIsLoggedIn)}
        onChange={(event) => handleDataChange(event, userDetails, setUserDetails)}
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
        <SubmitButton
          fieldName='login'
          target='dashboard'
        />
        <AuthenticationFooter
          query="Don't have an Account"
          target='signup'
        />

      </form>
    </div>
  );
};

export default Login;
