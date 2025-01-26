import React from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../Context/LoginContext';
import '../styles/home.css'
const ErrorMessage = () => {
    let { errorMessage } = useContext(UserDataContext);
    return (

        <div
            className='errorMessage'
        >{errorMessage}</div>
    )
}

export default ErrorMessage