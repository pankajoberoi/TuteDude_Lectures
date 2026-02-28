import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate=useNavigate()


  return (
    <div>
        <button onClick={()=> navigate("/profile",{
            state : {name : "Pankaj Oberoi" , age:25}
        })}>
            Signup
        </button>
    </div>
  )
}

export default SignUp