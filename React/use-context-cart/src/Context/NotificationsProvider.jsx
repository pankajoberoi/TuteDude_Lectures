import React, { useState } from 'react'
import NotificationsContext from './NotificationsContext'

const NotificationsProvider = ({children}) => {

    const [msg,setMsg]=useState("")

    function showNotification(msg){
        setMsg(msg);
        setTimeout(()=>{setMsg("")},3000)
    }


  return (
    <NotificationsContext.Provider value={{msg,setMsg,showNotification}}>
        {children}
    </NotificationsContext.Provider> 
  )
}

export default NotificationsProvider