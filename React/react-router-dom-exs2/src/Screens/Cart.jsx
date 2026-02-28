import React from 'react'
import { useLoaderData } from 'react-router-dom'

const Cart = () => {

    const data=useLoaderData()

  return (
    <div>
        <ul>
            {data.carts[0].products.map((p)=>(
                <li key={p.id}>{p.title}</li>
            ))}
        </ul>
    </div>
  )
}

export default Cart