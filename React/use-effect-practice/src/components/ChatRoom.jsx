import React, { useState } from 'react'

import UseChatRoom from './UseChatRoom'

const ChatRoom = ({roomId}) => {

    const[serverUrl,setServerUrl]=useState("https://localhost:1234")

    UseChatRoom({serverUrl,roomId})


  return (
    <div>
        <label>
            <input type="text"
            value={serverUrl}
            onChange={e => setServerUrl(e.target.value)} />
        </label>
        <h1>Welcome to the {roomId} room!</h1>

    </div>
  )
}

export default ChatRoom
 