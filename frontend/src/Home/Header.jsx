import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes, {propTypes} from 'prop-types'
import { UserDataContext } from "../Context/LoginContext";

const Header =(props)=>{
    const {APP_NAME,navigate} = props;
    const {isLoggedIn,setIsLoggedIn}=useContext(UserDataContext);
     return (
        <header>
            <h1 onClick={()=> {
                        navigate('/')
                    }}>
                 {APP_NAME}
            </h1>
            <nav>
            {!isLoggedIn &&
                <ul>
                    <li onClick={()=> {
                        navigate('/login')
                    }}
                    id="login">
                        Login
                    </li>
                    <li onClick={()=>{
                        navigate('/signup')
                    }}
                    id="signup">
                        Sign Up
                    </li>
                    
                </ul>||

                <ul>
                    <li onClick={()=>{
                        setIsLoggedIn(false);
                        navigate('/login');
                    }}
                    id="logout">
                        Log Out
                    </li>
                </ul>
            }
            </nav>


        </header>
    );
}

Header.propTypes={
    APP_NAME:PropTypes.string
}
export default Header