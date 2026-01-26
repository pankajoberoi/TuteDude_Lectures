import React, { useEffect, useState } from 'react'

const Welcome = () => {

    const[count,setCount]=useState(1)
    
    
    useEffect(()=>{
        console.log("Component Mounted(bas ek baar)");
    },[])

    useEffect(()=>{
        console.log("Component Updated (on Every count change)");
    },[count])


  return (
    <>
        <div>Welcome to React with TuteDude</div>

        <h2>{count}</h2>
        <button onClick={()=> setCount(count+1)}>+</button>
    
    </>

    
  )
}

export default Welcome