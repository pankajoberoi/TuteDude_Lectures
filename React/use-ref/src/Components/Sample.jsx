import React, { useRef, useState } from 'react'

const Sample = () => {

    const Countref=useRef(50)
    const [count,setCount]=useState(50)

    function handleClick(){
        console.log(Countref.current++ , " i am ref value ");
        setCount(count+1)
    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Click+</button>
    </div>
  )
}

export default Sample