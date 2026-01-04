import React, { useState } from 'react'

const Counter = () => {

    const [speed,setSpeed]=useState(0)

    function increment(){
        setSpeed(s => s+1)
    }

  return (
    <div>
        <h1>Fan Speed : {speed}</h1>

        <button onClick={()=>{
            increment();
            increment();
            increment();
        }}>
            +3
        </button>


        <button onClick={()=>{
            increment()
        }}>
            +1    
        </button>


    </div>
  )
}

export default Counter