import { createContext, useState, useEffect } from 'react'


export const UserDataContext = createContext({});


export const UserDataProvider = ({ children }) => {
    const APP_NAME = "https://static.naukimg.com/s/0/0/i/ni-hamburger/nc_new_logo.svg";

    const [userDetails, setUserDetails] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        password: "",
        confrimPassword: "",
        email: "",

    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    return (
        <UserDataContext.Provider
            value={{
                userDetails, setUserDetails, isLoggedIn, setIsLoggedIn, APP_NAME, errorMessage, setErrorMessage
            }}
        >
            {children}
        </UserDataContext.Provider>
    )
}

