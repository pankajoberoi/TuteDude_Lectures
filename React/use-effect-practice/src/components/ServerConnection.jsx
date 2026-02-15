
const ServerConnection = ({serverUrl,roomId}) => {
  return {
    connect(){
        console.log(`Connecting to ${serverUrl} server and with Channel ${roomId}`);
    },
    disconnect(){
        console.log(`Disconnected from ${serverUrl} server and with Channel ${roomId}`);
    }
  }
}

export default ServerConnection