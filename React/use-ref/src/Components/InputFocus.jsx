import React, { useEffect, useRef } from 'react'

const InputFocus = () => {

    const inputref=useRef()

    useEffect(()=>{
        inputref.current.focus()
    },[])


  return (
    <div>
        <form action="">
            Name : <input type="text" placeholder='Please enter your name' ref={inputref}/> <br /> <br />
            Password : <input type="text" placeholder='Please enter your pass'/> <br />
            <button>Save</button>
        </form>
        
    </div>
  )
}

export default InputFocus