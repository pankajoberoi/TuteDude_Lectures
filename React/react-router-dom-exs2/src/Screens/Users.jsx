import React, { useEffect, useState } from 'react'

const Users = () => {

    const [users,setUsers]=useState([])

    useEffect(()=>{
        fetch("https://dummyjson.com/users")
            .then(res => res.json())
            .then(data => setUsers(data.users))

    return () => console.log("Api call hui thi");;

    },[])


  return (
    <div>
        <ul>
            {users.map((u)=>(
                <li key={u.id}>{u.firstName}</li>
            ))}
        </ul>
        
    </div>
  )
}

export default Users