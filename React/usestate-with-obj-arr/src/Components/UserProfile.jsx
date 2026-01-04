import React from 'react'
import { useState } from 'react'

const UserProfile = () => {

    const [user,setUser]=useState({
        name:"Rohit",
        address : {
            city:"Pune",
            pincode:411057
        }
    })

    let changeCity = () =>{
        setUser({
            ...user,
            address:{
                ...user.address,
                city:"Mumbai"
            }
        })
    } 




  return (
    <div>
        <h2>{user.name}</h2>
        <p>{user.address.city}</p>
        <button onClick={changeCity}>Switch Location</button>
    </div>
  )
}

export default UserProfile