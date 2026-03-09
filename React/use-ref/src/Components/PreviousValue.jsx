import React, { useState ,useRef, useEffect } from 'react'

const PreviousValue = () => {

    const [input,setInput]=useState("")
    const Prevref=useRef("");
    const disRef=useRef()


    function handleInput(e){
        setInput(e.target.value)
    }

    useEffect(()=>{
        Prevref.current=input
        let name=Prevref.current

        if(name.length > 8){
            disRef.current.disabled=true
        }
        

    },[input])


  return (
    <div>
        <input type="text" onChange={handleInput} placeholder='Enter your value' ref={disRef}/>
        <h3>{input}</h3>
    </div>
  )
}

export default PreviousValue