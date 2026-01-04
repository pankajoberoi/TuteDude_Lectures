import React, { useState } from 'react'

const Profile = () => {

    const [user,setUser]=useState({
        name:"User",
        age:0
    })

    // const user = {name:"Pankaj",age:25}
    // console.log("original " , user);

    // let copy = {...user}
    // console.log("Copy " , copy);


  return (
    <div>
        <h2>Name : {user.name}</h2>
        <h2>Age : {user.age}</h2>

        <input placeholder='Enter name'
        onChange={(e)=> setUser({...user,name:e.target.value})} />

        <button onClick={()=> setUser({...user,age:user.age+1})}>Increase Age</button>

    </div>
  )
}

export default Profile