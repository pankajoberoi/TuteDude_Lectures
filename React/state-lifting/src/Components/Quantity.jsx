import React from 'react'
import { useState } from 'react'

const Quantity = ({qty , setQty}) => {

    

  return (
    <div>
        <h2>Item : Butter Chicken</h2>
        <button onClick={()=> setQty(qty + 1)}>+</button>
        <span>{qty}</span>
        <button onClick={()=> setQty(qty - 1)}>-</button>
    </div>
  )
}

export default Quantity