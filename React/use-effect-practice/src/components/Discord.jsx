import React, { useState } from 'react'
import ChatRoom from './ChatRoom'

const Discord = () => {

    const[roomId,setRoomId]=useState('College')
    const[show,setShow]=useState(false)

  return (
    <div>
        <label>
            <select value={roomId}
            onChange={e => setRoomId(e.target.value)}>
                <option value="College">College</option>
                <option value="Friends">Friends</option>
                <option value="Family">Family</option>
                <option value="Society">Society</option>
            </select>
        </label>

        <button onClick={()=>setShow(!show)}>
            {show ?'Close Chat':'Open Chat'}
        </button>

        {show && <ChatRoom roomId={roomId}/>}

    </div>
  )
}

export default Discord