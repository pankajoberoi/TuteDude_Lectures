import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {

    const[show,setShow]=useState(true)

  return (
    <div>
        <button onClick={()=> setShow(!show)}>Toggle</button>
        {show && <Child/>}

    </div>
  )
}

export default Parent