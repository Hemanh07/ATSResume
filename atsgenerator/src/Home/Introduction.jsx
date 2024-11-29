import React from 'react'
import { useNavigate } from 'react-router-dom'

const Introduction = () => {
    const navigate= useNavigate();
  return (
    <div><h1>home</h1>
          <button  onClick={()=>navigate('/signup')}>Get Started</button></div>
  )
}

export default Introduction