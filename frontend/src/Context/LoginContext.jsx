import {createContext,useState,useEffect} from 'react'


export const UserDataContext = createContext({});


export const UserDataProvider =  ({children})=>{
    const [userDetails,setUserDetails]=useState({
        userName:"",
        firstName:"",
        lastName:"",
        password:"",
        confrimPassword:"",
        email:"",
 
    });
    const [isLoggedIn,setIsLoggedIn]=useState(false);
    return(
        <UserDataContext.Provider
            value={{
                userDetails,setUserDetails,isLoggedIn,setIsLoggedIn
            }}
        >
            {children}
        </UserDataContext.Provider>
    )
}
 
