import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes, {propTypes} from 'prop-types'

const Header =(props)=>{
    const {APP_NAME,navigate} = props;
     return (
        <header>
            <h1 onClick={()=> {
                        navigate('/')
                    }}>
                 {APP_NAME}
            </h1>
            <nav>
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
                </ul>
            </nav>

        </header>
    );
}

Header.propTypes={
    APP_NAME:PropTypes.string
}
export default Header