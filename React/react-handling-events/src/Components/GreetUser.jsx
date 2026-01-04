import React from 'react'

const GreetUser = ({name}) => {

    function sendGreetings(){
        alert(`Hello ${name}`)
    }

  return (
    <div>
        <button onDoubleClick={sendGreetings}>Greet Me!!</button>
    </div>
  )
}

export default GreetUser