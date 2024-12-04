import React from 'react'
import { useNavigate } from 'react-router-dom';
import DesignLabel from './DesignLabel';

const AuthenticationFooter = ({ query, target }) => {
      const navigate = useNavigate();

    return (
        <footer
            className={`${target}Footer`}
      >
          {query} ? 
          <span
              onClick={
                  () => navigate(`/${target}`)
              }
          >
              <DesignLabel
                  fieldName={target}
              />  
          </span>
    </footer>
  )
}

export default AuthenticationFooter