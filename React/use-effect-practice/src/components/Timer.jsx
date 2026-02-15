import React, { useEffect, useState } from 'react'

const Timer = () => {

    const[count,setCount]=useState(0)

    useEffect(()=>{
        let TimerInterval=setInterval(()=>{
            setCount(c=>c+1)
        },1000)
        return () => clearInterval(TimerInterval)
    },[])

  return (
    <div><h1>{count}</h1></div>
  )
}

export default Timer