import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'

const Cart = () => {

    const {cart,removeFromCart} =useContext(CartContext)

  return (
    <div>
        <ul>
            {cart.map((item,i)=>(
                <li key={i}>{item}
                <button onClick={()=> removeFromCart(i)}>Remove</button>
                </li>
            ))}
        </ul>
        

    </div>
  )
}

export default Cart