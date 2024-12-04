import React from 'react'
import DesignLabel from './DesignLabel'
import { useNavigate } from 'react-router-dom'

const SubmitButton = ({ fieldName, target }) => {
    const navigate = useNavigate();

    return (
        <button
            type='submit'
            className={`${fieldName}Button`}
            onClick={
                () => navigate(`/${target}`)
            }
        >
            <DesignLabel
                fieldName={fieldName}
            />
        </button>
    )
}

export default SubmitButton