import React from 'react'
import {products} from '../Data/Products'
import { useDispatch } from 'react-redux'
import { addToCart } from '../Features/CartSlice'
const ProductList = () => {

    const dispatch=useDispatch()


    function handleAdd(product){
        // dispatch a action
        dispatch(addToCart(product))
    }


  return (
    <div>
        <h2>Products</h2>
        {
            products.map((product)=>(
                <div key={product.id} style={{borderBottom:"2px solid black",
                    width:"100px", padding:"3px"
                }}>
                    <h4>{product.name}</h4>
                    <p>Price : Rs:{product.price}</p>

                    <button onClick={()=> handleAdd(product)}>Add to Cart</button>
                </div>

            ))
        }


    </div>
  )
}

export default ProductList