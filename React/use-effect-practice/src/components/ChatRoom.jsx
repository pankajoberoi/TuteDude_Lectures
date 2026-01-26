import React, { useEffect, useState } from 'react'
import ServerConnection from './ServerConnection'
const ChatRoom = ({roomId}) => {
    const [serverUrl,setServerUrl]=useState('https:localhost:1234')

    useEffect(()=>{
        const connection=ServerConnection(serverUrl,roomId)
        connection.connect();
        return () =>{
            connection.disconnect()
        }

    },[roomId,serverUrl])


  return (
    <div>
        <label >
            Server URL : {' '}
            <input type="text" 
                value={serverUrl}
                onChange={e=>setServerUrl(e.target.value)}
            />
        </label>
        <h1>Welcome to the {roomId} room!</h1>


    </div>
  )
}

export default ChatRoom