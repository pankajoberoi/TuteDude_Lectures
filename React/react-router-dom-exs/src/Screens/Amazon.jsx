import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'


const Amazon = () => {
  const navigate=useNavigate()
  return (
    <div>
      <h2>Amazon</h2>
      <button onClick={()=> navigate("/dashboard")}>Go to Dashboard</button>
      <Outlet/>
    </div>
    
  )
}

export default Amazon