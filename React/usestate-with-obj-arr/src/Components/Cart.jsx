import React, { useState } from 'react'

const Cart = () => {

    let [cart,setCart]=useState([
        {id:1 ,name:"Mobile",price:20000,qty:1},
        {id:2 ,name:"Headphones",price:2000,qty:1},
        {id:3 ,name:"Charger",price:200,qty:1}  
    ])

    const increseQty = (id) =>{
        setCart(
            cart.map(item => item.id===id ? {...item,qty:item.qty+1}:item)
        )   
    }

  return (
    <div>
        <h1>Hello ji</h1>
        {
            cart.map(item=>{
                return <div key={item.id}>
                    {item.name} - {item.qty}
                    <button onClick={()=> increseQty(item.id)}>+</button>
                </div>
            })
        }
        {/* hw : new item add -> cart -> form -> object properties -> submit -> () -> object -> array add karega*/} 
    </div>
  )
}

export default Cart