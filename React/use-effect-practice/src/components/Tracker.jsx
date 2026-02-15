import React, { useEffect, useState } from 'react'
import '../Styling/trackerStyle.css'

const Tracker = () => {
    const [position,setPosition]=useState({x:0,y:0})


    useEffect(()=>{
        function handlePosition(e){
            setPosition({x:e.clientX,y:e.clientY})
        }
        console.log("IN useEffect");
        window.addEventListener('pointermove',handlePosition)

        return () =>{
            window.addEventListener('pointermove',handlePosition)
        }
    },[])

  return (
    <div>
        <div style={{
            height:'20px',
            width: '20px',
            borderRadius: '100%',
            backgroundColor: 'pink',
            position:'absolute',
            transform:`translate(${position.x}px,${position.y}px)`,
        }}></div>
    </div>
  )
}

export default Tracker