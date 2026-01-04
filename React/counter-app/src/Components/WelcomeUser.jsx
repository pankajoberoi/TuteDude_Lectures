import React, { useState } from 'react'

const WelcomeUser = () => {

    const [name,setName]=useState("Guest");


  return (
    <div>

        <h2>Hello , {name}</h2>
        <input type="text" onChange={(e)=>setName(e.target.value)}/>


    </div>
  )
}

export default WelcomeUser