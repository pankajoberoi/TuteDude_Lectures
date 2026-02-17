import React, { useState } from 'react'
import { CartContext } from './CartContext'


const CartProvider = ({children}) => {


    const[cart,setCart]=useState([])

    const addToCart = (item) =>{
        setCart([...cart,item])
    }

    const removeFromCart = (index) =>{
        setCart(cart.filter((_,i)=> i!==index) )
    }
   

  return (
    <div>
        <CartContext.Provider value={{cart,setCart,addToCart,removeFromCart}}>
            {children}
        </CartContext.Provider>
    </div>
  )
}

export default CartProvider