import React from 'react'

const DynamicUI = () => {

    function handleChange(){
        const inputValue=document.getElementById('liveInput').value;
        document.getElementById('liveOut').innerHTML = inputValue || "Whatever you type will appear here........."
    }

  return (
    <div>
        <input type="text" placeholder='Type something....' onChange={handleChange} id='liveInput'/>
        
        <h3>Output : </h3>
        <p id="liveOut">Whatever you type will appear here.........</p>
    </div>
  )
}

export default DynamicUI