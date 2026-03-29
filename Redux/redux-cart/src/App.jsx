import React from 'react'
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Cart from './Components/Cart'

const App = () => {
  return (
    <div>
      <Navbar/>
      <div style={{display:"flex",columnGap:"100px"} }>
        <ProductList/>
        <Cart/>
      </div>
      
    </div>
  )
}

export default App