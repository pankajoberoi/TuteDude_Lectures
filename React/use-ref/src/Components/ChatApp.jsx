import React, { useEffect,useRef, useState } from 'react'

const ChatApp = () => {

    const [messages,setMessages]=useState([
        "Hello","How are you?"
    ])
    const [input,setInput]=useState("")

    const latestViewRef=useRef()


    useEffect(()=>{
        latestViewRef.current.scrollIntoView()
    },[messages])


    function sendMessage(){
        setMessages([...messages,input])
        setInput("")
    }

  return (
    <div style={{
        width:300, border:"1px solid black",padding:10
    }}>
        <h2>Chat Here</h2>

        <div style={{
            height:100, overflowY:"auto",
            border:"1px solid black",
            marginBottom:10,
            padding:5
        }} >
            {messages.map((msg)=>(
                <div key={msg}>{msg}</div>
            ))}


            <div ref={latestViewRef} id="sampleDiv"></div>
        </div>

    
        <input type="text" placeholder='type message' onChange={(e)=>setInput(e.target.value)} value={input}/>
        <button onClick={sendMessage}>Send</button>


    </div>
  )
}

export default ChatApp