import React, { useEffect } from 'react'
import { useState } from 'react';

const Users = () => {

    const[loggedIn,setLoggedIn]=useState(false)
    console.log(loggedIn);

    // useEffect(()=>{
    //     const id=setInterval(()=> console.log("running"),1000)
    // })

  return (
    <div>
        <h1>UseEffect!!!</h1>
        {/* <button onClick={()=> setLoggedIn(!loggedIn)}>Click to LogIn</button> */}
    </div>
  )
}

export default Users