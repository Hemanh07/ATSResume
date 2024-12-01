

export const handleLoginSubmit =  (event,navigate,userDetails,setUserDetails,setIsLoggedIn) => {
    console.log(event);
    
    event.preventDefault();
    let username = document.getElementById("userName").value;
    setIsLoggedIn(true);
     
     navigate('/dashboard');

};

 