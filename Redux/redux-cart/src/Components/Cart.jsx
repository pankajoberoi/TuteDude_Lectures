import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../Features/CartSlice'

const Cart = () => {


    const cartItems=useSelector((state)=>state.cart.items)

    const dispatch=useDispatch()

    function handleRemove(id){
        dispatch(removeFromCart(id))
    }

  return (
    <div>
        <h2>Cart</h2>

        {cartItems.map((item)=>(
            <div key={item.id}>
                <p>{item.name} - Rs{item.price}</p>

                <button onClick={()=>handleRemove(item.id)}>Remove</button>
            </div>
        ))}


    </div>
  )
}

export default Cart