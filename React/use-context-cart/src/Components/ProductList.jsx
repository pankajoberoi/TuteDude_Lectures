import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'

const ProductList = () => {
    const[item,setItem]=useState('')

    const { addToCart }=useContext(CartContext)

    function handleClick(){
        addToCart(item)
        setItem('')
    }

  return (
    <div>
        <h1>Hello ji</h1>
        Item : <input type="text" value={item} onChange={(e)=> setItem(e.target.value)}/>
        <button onClick={()=> handleClick()}>AddItemToCart</button>
    </div>
  )
}

export default ProductList