import { use } from "react"
import { useState } from "react"
import ChatRoom from "./components/ChatRoom"
import Page from "./components/Page"

function App() {
  const [roomId,setRoomId]=useState('general')
  const [show,setShow]=useState(false)

  return (
    <>
      <Page/>
    </>
  )
}

export default App
