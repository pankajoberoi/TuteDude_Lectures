import React, { useMemo, useState } from 'react'

const DemoUsers=Array.from({length : 10000000},(_,i)=>({
    id:i,
    role:"User " + i
}))

const Users = () => {

    const [search,setSearch]=useState("")


    const filteredUsers=useMemo(()=>{
        console.log("Filtereing  users....");
        return DemoUsers.filter(user =>
        user.role.toLowerCase().includes(search.toLowerCase()))

    },[search])

    

    function printFilteredUsers(){
        console.log(DemoUsers)
    }

  return (
    <div>
        <br />
        <input type="text" 
        placeholder='search user'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}/>


        <p>Results : {filteredUsers.length}</p>

        <button onClick={printFilteredUsers}>Click</button>


    </div>
  )
}

export default Users