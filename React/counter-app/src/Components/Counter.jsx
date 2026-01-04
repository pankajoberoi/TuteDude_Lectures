import React, { useState } from 'react'

const Counter = () => {

    // const arr=useState(5);
    // console.log(arr);

    
    let[count,setCount]=useState(0);


   function handleIncrement(){
        setCount(count+1)
   }



  return (
    <div>

        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <h3>Count - {count}</h3>
        <button onClick={handleIncrement}>Increment</button>
        <button onDoubleClick={()=>setCount(0)}>Reset</button>

        {/* <h1>Count - {arr[0]}</h1> */}


    </div>
  )
}

export default Counter