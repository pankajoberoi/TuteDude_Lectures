import React, { useState } from 'react'

const BasicForm = () => {

    let [name,setName]=useState("Admin")
    let [age,setAge] = useState(0)

  return (
    <div>
        Name : <input value={name} onChange={e => setName(e.target.value) }/>
        Age : <input value={age} onChange={e => setAge(e.target.value)}/>

        <h2>Hello {name} , Your age is {age}</h2>
    </div>
  )
}

export default BasicForm