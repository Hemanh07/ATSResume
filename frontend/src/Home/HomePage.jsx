import React from "react";
import { Outlet } from "react-router-dom";
import { UserDataProvider } from "../Context/LoginContext";
import "../styles/home.css";
import Header from "./Header";

const HomePage = () => {
  return (
    <div>
      <UserDataProvider>
        <Header />
        <Outlet />
      </UserDataProvider>
    </div>
  );
};

export default HomePage;
