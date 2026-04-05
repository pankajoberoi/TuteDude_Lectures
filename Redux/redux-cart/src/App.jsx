import React from 'react'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Cart from './Components/Cart'
import Notification from './Components/Notification'
import { useAppSelector } from './Store/hooks'

const App = () => {

  const user=useAppSelector((state)=>state.auth.user)
  const theme=useAppSelector((state)=> state.theme.mode)



  return (
    <div>
      <Navbar/>
      <hr />

      <div style={{
        background: theme === "dark" ? "#222":"#fff",
        color : theme === "dark"? "#fff" : "black"
      }}>
        {user? <div style={{display:"flex",columnGap:"100px"} }>
        <ProductList/>
        <Cart/>
        <Notification/>
      </div>:<p>Please Login to use this application</p>}
      </div>

      

      
      
    </div>
  )
}

export default App