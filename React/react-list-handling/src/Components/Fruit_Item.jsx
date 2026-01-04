import React from 'react'

const Fruit_Item = () => {

    let fruits=["Mango","Apple","Litchi","Banana"]

  return (
    <div>
        <ul>
            {fruits.map(item => <li key={item}>{item}</li>)}
        </ul>
    </div>
  )
}

export default Fruit_Item