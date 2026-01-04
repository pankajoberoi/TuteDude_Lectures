import React from 'react'
import { useState } from 'react';
import WelcomeUser from './WelcomeUser';


const Theme = () => {

    const[dark,setDark]=useState(false);

  return (
    <div style={{background : dark ? "black" :"white",
        color:dark?"white":"black"
    }}>

    <WelcomeUser/>   
    <br />
    <button onClick={()=>setDark(!dark)}>Toggle Theme</button>

    </div>
  )
}

export default Theme