

export const handleLoginSubmit = (event,navigate) => {

    event.preventDefault();
    let username = document.getElementById("userName").value;
    navigate(`/dashboard`);

};

 