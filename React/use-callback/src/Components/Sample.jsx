import React, { useCallback, useState } from 'react'

const Sample = () => {

    const [count,setCount]=useState(0)

    const handleClick=useCallback(()=>{
        console.log("New Function reference created");
        console.log("Button Clicked");
    },[])

    

  return (
    <div>
        <button onClick={handleClick}>Click</button>
        
        <button onClick={()=>setCount(count+1)}>Inc count</button>

        <h3>Count : {count}</h3>


    </div>
  )
}

export default Sample