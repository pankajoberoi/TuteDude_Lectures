import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const Login = ({setUser}) => {

    const [form,setForm]=useState({
        email:"",
        password:""
    })

    const navigate=useNavigate()

    function handleChange(e){
        setForm({...form,[e.target.name]:e.target.value})
    }

    function handleSubmit(e){
        e.preventDefault()

        if(form.email === "admin@gmail.com" && form.password === "123456"){
            setUser("Admin")
            navigate("/dashboard")
        }
        else{
            alert("Invalid Credentials")
        }

    }



  return (
    <div>
        <h2>Login !!</h2>
        <form onSubmit={handleSubmit}>
            <input
            name="email"
            type='email'
            placeholder='Email'
            value={form.email}
            onChange={handleChange}/>

            <input
            name="password"
            type="password"
            placeholder='Password'
            value={form.password}
            onChange={handleChange}/>

            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login