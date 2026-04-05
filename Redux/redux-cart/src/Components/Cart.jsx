import React from 'react'
import { removeFromCart } from '../Features/cart/CartSlice'
import { useAppDispatch, useAppSelector } from '../Store/hooks'
import { selectCartItems, selectCartTotal } from '../Features/cart/cartSelectors'

const Cart = () => {


    const cartItems=useAppSelector(selectCartItems)
    const total=useAppSelector(selectCartTotal)
    const dispatch=useAppDispatch()

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

        <h3>Total : Rs{total}</h3>


    </div>
  )
}

export default Cart