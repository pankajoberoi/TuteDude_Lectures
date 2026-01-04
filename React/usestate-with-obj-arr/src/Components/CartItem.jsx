import React, { useState } from 'react'

const CartItem = () => {

    let [item,setItem]=useState({
        name:"Laptop",
        price:50000,
        qty:1
    })

  return (
    <div>
        <h2>{item.name}</h2>
        <p>Price : Rs {item.price}</p>
        <p>Quantity : Rs {item.qty}</p>
        <p>Total : Rs {item.price * item.qty}</p>

        <button onClick={()=> setItem({...item,qty:item.qty+1})}>+</button>
        <button onClick={()=> setItem({...item,qty:item.qty-1})}>-</button>
    </div>
  )
}

export default CartItem