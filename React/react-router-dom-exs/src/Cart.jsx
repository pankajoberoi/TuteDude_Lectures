import React from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ProductList from './Screens/ProductList'
import Product from './Component/Product'
import Welcome from './Welcome'

const Cart = () => {

    const items=[
        {
            id:1,name:"Laptop",price:50000,availability:"true"
        },{
            id:2,name:"Mobile",price:20000,availability:"false"
        },{
            id:3,name:"Headphones",price:2000,availability:"true"
        }
    ]
  
  const router=createBrowserRouter([
    {
        path:"/",
        element:<Welcome/>
    },
    {
        path:"/products",
        element:<ProductList items={items}/>
    },
    {
        path:"products/:id",
        element:<Product items={items}/>
    },
  
])



  return <RouterProvider router={router}/>
}

export default Cart