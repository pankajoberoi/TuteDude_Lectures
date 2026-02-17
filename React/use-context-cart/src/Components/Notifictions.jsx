import React, { useContext, useEffect } from 'react'
import NotificationsContext from '../Context/NotificationsContext'
import {toast} from 'react-toastify'

const Notifictions = () => {

    const {msg}=useContext(NotificationsContext);

    useEffect(()=>{
        if(msg){
            toast.success(msg ,{
                position:"top-right",
                autoClose:3000,
            })
        }
    },[msg])


  return (
    null
  )
}

export default Notifictions