import React from 'react'

const ServerConnection = (serverUrl,roomId) => {
  return {
    connect(){
        console.log(`Connecting to ${roomId} room at ${serverUrl}`);
    },
    disconnect(){
        console.log(`Disconnected from ${roomId} room at ${serverUrl}`);
    }
}
}

export default ServerConnection;