import React from 'react'
import DesignLabel from './DesignLabel'
import "../styles/login.css";

const InputField = ({ fieldName, inputType }) => {
  return (
    <section
      className='InputBox'
    >
      <label
        htmlFor={fieldName}>
        <DesignLabel
          fieldName={fieldName}
        /> :
      </label>

      <input
        required
        type={inputType}
        name={fieldName}
        id={fieldName}

      />
    </section>
  )
}

export default InputField