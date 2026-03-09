import React, { useMemo, useState } from 'react'

const Sample = () => {

    const [count,setCount]=useState(0)

    const memoizedvalue=useMemo(()=>{
        console.log("Printed Memoized value");
        return 2+2
    },[])


  return (
    <div>
        <h1>Memo Value is : {memoizedvalue}</h1>
        <h1>count is : {count}</h1>
        <button onClick={()=> setCount(count+1)}>+</button>
        <button>-</button>
    </div>
  )
}

export default Sample