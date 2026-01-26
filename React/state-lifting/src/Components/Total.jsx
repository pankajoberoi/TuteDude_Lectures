import React from 'react'

const Total = ({qty,price}) => {

    

  return (
    <div>

        <h2>Total Bill : Rs{qty*price} </h2>

    </div>
  )
}

export default Total