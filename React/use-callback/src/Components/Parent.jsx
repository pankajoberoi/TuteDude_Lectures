import React, { useCallback, useState } from 'react'
import Child from './Child'

const Parent = () => {

    const [count,setCount]=useState(0)

    const handleClick=useCallback(()=>{
        console.log("Child component creation");
    },[])
    
  return (
    <div>
        <h3>Count : {count}</h3>
        <button onClick={()=> setCount(count+1)}>Inc Count</button>

        <Child name={"Pankaj Oberoi"}
        handleClick={handleClick}/>


    </div>
  )
}

export default Parent