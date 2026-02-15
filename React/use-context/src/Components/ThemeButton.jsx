import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const ThemeButton = () => {

    const{dark,setDark}=useContext(ThemeContext)


  return (
    <div
        style={{
            background:dark?"black":"white", 
            height:"70vh"
        }}
    
    >
        <h1  style={{
            color:dark?"white":"black", 
        }}
    >We are Practicing UseContext</h1>
        <button onClick={()=>setDark(!dark)}>Toggle Theme</button>
    </div>
  )
}

export default ThemeButton