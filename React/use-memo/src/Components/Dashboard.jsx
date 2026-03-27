import React, { useState } from 'react'
import Users from './Users'

const Dashboard = () => {

    const [count,setCount]=useState(0)

  return (
    <div>
        <h1>User Search Demo</h1>

        <button onClick={()=> setCount(count + 1)}>
            Re - render App ({count})
        </button> <br />

        <Users/>




    </div>
  )
}

export default Dashboard