import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import "../styles/login.css";
import DesignLabel from "./DesignLabel";

const PasswordField = ({ fieldName }) => {
  const [passwordStatus, setPasswordStatus] = useState(true);
  return (
    <div>
      <label 
        htmlFor={fieldName}
      >
        <DesignLabel
            fieldName={fieldName}
        /> :
      </label>
      <section 
        className="passwordSection"
      >
        <input
          type={passwordStatus ? "password" : "text"}
          name={fieldName}
          id={fieldName}
          required
        />

        <span onClick={() => setPasswordStatus(!passwordStatus)}>
          {
          (passwordStatus && <VisibilityOffIcon />) || <VisibilityIcon />
          }
        </span>
      </section>
    </div>
  );
};

export default PasswordField;
