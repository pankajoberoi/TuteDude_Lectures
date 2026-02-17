import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ProductList from './Screens/ProductList'
import Product from './Component/Product'
import Welcome from './Welcome'

const Cart = () => {

  
  const router=createBrowserRouter([
    {
        path:"/",
        element:<Welcome/>
    },
    {
        path:"/products",
        element:<ProductList/>
    },
    {
        path:"products/:id",
        element:<Product/>
    },
  
])



  return <RouterProvider router={router}/>
}

export default Cart