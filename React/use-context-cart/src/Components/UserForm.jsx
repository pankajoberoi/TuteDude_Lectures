import React, { useContext } from 'react'
import NotificationsContext from '../Context/NotificationsContext'

const UserForm = () => {

    const {showNotification}=useContext(NotificationsContext)   
    
    function handleSubmit(e){
        e.preventDefault()
        showNotification("Form Submitted")
    }

  return (
    <div>
        <form onSubmit={(e)=> handleSubmit(e)}>
            Name : <input type='text'/> <br />
            Email : <input type='email'/> <br />
            Password : <input type='password'/> <br />
            <button type='submit'>Save</button>
        </form>
       

    </div>
  )
}

export default UserForm