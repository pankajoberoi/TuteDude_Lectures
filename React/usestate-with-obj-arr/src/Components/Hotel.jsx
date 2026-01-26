import React, { useState } from 'react'

const Hotel = () => {

    let [hotel,setHotel]=useState({
        name : "JW",
        rooms:[
            {id:1,type:"Deluxe",booked:false},
            {id:2,type:"Suite", booked:false}
        ]
    }) 


    const bookRoom = (id) => {
        setHotel({
            ...hotel,
            rooms:hotel.rooms.map(room => room.id === id ? {...room,booked:true}:room) 
        })
    }




  return (
    <div>
        <h2>{hotel.name}</h2>
        {
            hotel.rooms.map(room => (
                <div key={room.id}>
                    {room.type} - {room.booked ? "Booked":"Available"}
                    <button onClick={()=> bookRoom(room.id)}>Book</button>
                    <button>Unbook</button>
                </div>
            ))
        }
        {/* h/w   toggle the button -> booked -> available -> booked*/}
    </div>
  )
}

export default Hotel