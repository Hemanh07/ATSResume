import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserDataContext } from "../Context/LoginContext";
import NavBar from "./NavBar";

const Header = () => {
    const { APP_NAME } = useContext(UserDataContext);

    const navigate = useNavigate();

    return (
        <header>
            <h1 onClick={() => {
                navigate('/')
            }}>
                {APP_NAME}
            </h1>
            <NavBar />

        </header>
    );
}


export default Header