import React from 'react'

const InputDemo = () => {

    function handleChange(event){
        console.log("Typed :",event.target.value);
    }

  return (
    <div>

        <label htmlFor="name">Name : </label>
        <input type="text" id='name' placeholder='Enter your name' onChange={handleChange}/>


    </div>
  )
}

export default InputDemo