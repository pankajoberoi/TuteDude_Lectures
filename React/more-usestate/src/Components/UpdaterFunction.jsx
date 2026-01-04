import React, { useState } from 'react'

const UpdaterFunction = () => {

    let [name,setName]=useState("User")

    function handleClick(){
        setName('Pankaj')
        console.log(name);
    }

  return (
    <div>

        <h1>My name is {name}</h1>
        <button onClick={handleClick}>Click to change name</button>
    </div>
  )
}

export default UpdaterFunction