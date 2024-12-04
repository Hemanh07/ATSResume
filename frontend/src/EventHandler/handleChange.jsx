
export const handleDataChange = (event, userDetails, setUserDetails) => {

        let value = event.target.value;
        let fieldName = event.target.id;

        userDetails[fieldName] = value;

        let updatedData = { ...userDetails };

        setUserDetails(updatedData);
}