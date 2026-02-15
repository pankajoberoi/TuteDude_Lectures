import React from 'react'
import { useEffect } from 'react'
import ServerConnection from './ServerConnection'

const serverUrl="https://localhost:1234"//

const UseChatRoom = ({roomId}) => {
    
    useEffect(()=>{

        const options={serverUrl,roomId}

        const connection=ServerConnection(options)
        connection.connect();

        return ()=>{
            connection.disconnect()
        }

    },[roomId])
  
}

export default UseChatRoom