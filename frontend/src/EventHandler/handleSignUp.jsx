const handleSignUpSubmit = (event, navigate, userDetails, setIsLoggedIn) => {


    event.preventDefault();

    let URL = `http://localhost/3000/users/login?userName=${userDetails.userName}&email=${userDetails.email}&password=${userDetails.password}`;
    console.log(URL);

    setIsLoggedIn(true);

    navigate('/login');




};

export default handleSignUpSubmit;