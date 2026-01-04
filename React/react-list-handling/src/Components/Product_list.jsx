import React from 'react'

const Product_list = ({products}) => {
  return (
    <div>
        {products.length === 0 ?(
            <h3>No Products Found!!!!!!</h3>
        ):(
            products.map((item) => (
            <div key={item.id} className='card'>
                <h3>{item.name}</h3>
                <p>Price : Rs{item.price}</p>
            </div>
        ))
        )}

        
    </div>
  )
}

export default Product_list