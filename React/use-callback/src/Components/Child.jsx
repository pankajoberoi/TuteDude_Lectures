import React from 'react'

const Child = ({name,handleClick}) => {
    console.log("Rendered child as well");
  return (
    <div>
        <h1>Child component have value : {name}</h1>
        <button onClick={handleClick}>Click on child</button>
    </div>
  )
}

export default React.memo(Child)