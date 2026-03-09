import React, { useMemo, useState } from 'react'

const Expensive = () => {

    const [number,setNumber]=useState(0)
    const [speed,setSpeed]=useState(0)


    //jaan bhoojke ek exp cal.
    function expensiveCal(num){
        console.log("Calculating.......");
        for(let i=0;i<1000000000;i++){1*1}//expensive bnane ke liye
        return num*2
    }

    
    const result=useMemo(()=>{
        return expensiveCal(number)
    },[number])

  return (
    <div>
        <h1>Result : {result}</h1>

        <span>Number - {number}</span>
        <button onClick={()=> setNumber(number+1)}>Change Number</button>

        <span>Speed - {speed}</span>
        <button onClick={()=>setSpeed(speed + 5)}>Change Speed</button>

    </div>
  )
}

export default Expensive