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
        isLoggedIn:false,

    })
    return(
        <UserDataContext.Provider
            value={{
                userDetails,setUserDetails
            }}
        >
            {children}
        </UserDataContext.Provider>
    )
}
 
