import React, { useState } from "react";
import PropTypes, { propTypes } from "prop-types";
import { Outlet, useNavigate } from "react-router-dom";
import { UserDataProvider } from "../Context/LoginContext";
import "../styles/home.css";
import Header from "./Header";

const HomePage = () => {
  const navigate = useNavigate();
  const APP_NAME = "ATS RESUME GENERATOR";
  return (
    <div>
      <UserDataProvider>
        <Header 
          APP_NAME={APP_NAME} 
          navigate={navigate} 
        />
        <Outlet />
      </UserDataProvider>
    </div>
  );
};

export default HomePage;
