import React, { useState , useRef } from 'react'

const StopWatch = () => {

    const [time,setTime]=useState(0)
    const intervalRef=useRef()

    function handleStart(){
        intervalRef.current=setInterval(()=>{
            setTime(t=>t+1)
        },1000)
    }

    function handleStop(){
        clearInterval(intervalRef.current)
    }

  return (
    <div>
        <h2>{time}</h2>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default StopWatch