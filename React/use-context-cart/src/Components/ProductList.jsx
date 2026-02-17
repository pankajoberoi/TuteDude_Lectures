import React, { useContext, useState } from 'react'
import { CartContext } from '../Context/CartContext'
import NotificationsContext from '../Context/NotificationsContext'
const ProductList = () => {
    const[item,setItem]=useState('')

    const { addToCart }=useContext(CartContext)
    const {showNotification}=useContext(NotificationsContext)

    function handleClick(){
        addToCart(item)
        showNotification("Item Added to Cart")
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