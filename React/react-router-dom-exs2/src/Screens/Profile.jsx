import React from 'react'
import { useLocation } from 'react-router-dom'

const Profile = () => {

    const {state}=useLocation()


  return (
    <div>
        <h2>{state?.name}</h2>
        <p>{state?.age}</p>
    </div>
  )
}

export default Profile