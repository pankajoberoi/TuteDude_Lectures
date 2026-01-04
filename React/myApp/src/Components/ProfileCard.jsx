import React from 'react'
import './Profile.css'

const ProfileCard = (items) => {
  return (
    <>
        <div className="Main">
            <img src={items.img} alt="" id='image'/>
            <h1 id='heading'>{items.heading}</h1>
            <p id="desc">{items.desc}</p>
        </div>    
    
    
    </>
  )
}

export default ProfileCard