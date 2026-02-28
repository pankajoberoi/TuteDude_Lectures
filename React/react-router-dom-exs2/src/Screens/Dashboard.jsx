import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div style={{
        display:"flex"
    }}>
        <div style={{
            width:"200px",
            display:"flex",
            flexDirection:"column",
            rowGap:"20px"
        }}>
            <h3>Menu</h3>
            <Link to="home">Home</Link> <br />
            <Link to="users">Users</Link> <br />
            <Link to="settings">Settings</Link> <br />
        </div>

        <div style={{
            marginLeft:"20px",
            display:"flex",
            justifyContent:"center",
            alignItems:'center'
        }}>
            <Outlet/>
        </div>
        
    </div>
  )
}

export default Dashboard