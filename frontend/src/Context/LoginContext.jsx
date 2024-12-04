import { createContext, useState, useEffect } from 'react'


export const UserDataContext = createContext({});


export const UserDataProvider = ({ children }) => {
    const APP_NAME = "ATS RESUME GENERATOR";

    const [userDetails, setUserDetails] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        password: "",
        confrimPassword: "",
        email: "",

    });
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <UserDataContext.Provider
            value={{
                userDetails, setUserDetails, isLoggedIn, setIsLoggedIn, APP_NAME
            }}
        >
            {children}
        </UserDataContext.Provider>
    )
}

