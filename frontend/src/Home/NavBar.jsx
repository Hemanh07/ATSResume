import React, { useContext } from "react";
import { UserDataContext } from "../Context/LoginContext";
import { useNavigate } from "react-router-dom";
import SubmitButton from "../Components/SubmitButton";

const NavBar = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(UserDataContext);
    const navigate = useNavigate();
    return (
        <nav>

            {!isLoggedIn &&
                <ul>
                    <li onClick={() => {
                        navigate('/')
                    }}
                        id="home">
                        <SubmitButton
                            fieldName="Home"
                            target=""
                        />
                    </li>
                    <li onClick={() => {
                        navigate('/login')
                    }}
                        id="login">
                        Login
                    </li>
                    <li onClick={() => {
                        navigate('/signup')
                    }}
                        id="signup">
                        Sign Up
                    </li>


                </ul> ||

                <ul>
                    <li onClick={() => {
                        navigate('/')
                    }}
                        id="home">
                        <SubmitButton
                            fieldName="Home"
                            target=""
                        />
                    </li>
                    <li onClick={() => {
                        setIsLoggedIn(false);
                        navigate('/login');
                    }}
                        id="logout">
                        Log Out
                    </li>

                </ul>
            }
        </nav>
    )
}

export default NavBar