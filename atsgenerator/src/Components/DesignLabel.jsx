import React from 'react'

const DesignLabel = ({fieldName}) => {

  
  return (
     <span>
       {fieldName[0].toUpperCase()+fieldName.slice(1,)}
     </span>
  )
}

export default DesignLabel