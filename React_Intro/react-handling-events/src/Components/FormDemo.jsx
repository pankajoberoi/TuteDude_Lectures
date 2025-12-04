import React from 'react'

const FormDemo = () => {

    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log("Form Submitted")
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            Name : <input type="text" placeholder='Enter your name'/> <br /> <br />
            Email : <input type="email" placeholder='Enter your email' /> <br /> <br />
            Password : <input type="password" placeholder='Enter your password' /> <br /> <br />
            <button type='submit'>Submit</button>
        </form>

    </div>
  )
}

export default FormDemo