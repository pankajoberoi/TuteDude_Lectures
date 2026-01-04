import React from 'react'

const Offer = ({price}) => {
  return (
    <div>

        <p>Price : Rs:{price}</p> <br />
        {price < 500 && <span>Limited Time Offer ! Grab it Quickly!!!!</span>}

    </div>
  )
}

export default Offer