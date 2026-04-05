import React from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch, useAppSelector } from '../Store/hooks'
import { login,logout } from '../Features/auth/authSlice'
import { toggleTheme } from '../Features/theme/themeSlice'

const Navbar = () => {

    const user=useAppSelector(state => state.auth.user)
    const cartItems=useSelector((state) => state.cart.items)
    const dispatch=useAppDispatch()
    console.log(cartItems);

  return (
    <div  style={{
        background:'#222',
        color:'white',
        padding:"10px"
    }}>
        <h2>Shopping Cart App</h2>

        <p>Cart Items : {cartItems.length}</p>


        {user ?<>
              <span>Welcome {user.name}</span>
              <button onClick={()=> dispatch(logout())}>Logout</button>
        </> :
            <button onClick={()=> dispatch(login({name:"Virat Kohli"}))}>Login</button>}


       <button onClick={()=>dispatch(toggleTheme())}>Toggle Theme</button>
          
    </div>
  )
}

export default Navbar