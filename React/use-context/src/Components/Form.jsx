import React, { useContext } from 'react'
import { ThemeContext } from '../Context/ThemeContext'

const Form = () => {

    const{dark}=useContext(ThemeContext)

  return (
    <div style={{
        background:dark?"black":"white"
    }}>
        <label style={{
        color:dark?"white":"black"
    }}>Name :<input type="text" name="" id="" /></label> 
        
        <button type=''>submit</button>
    </div>
  )
}

export default Form