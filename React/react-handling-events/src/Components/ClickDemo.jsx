import React from 'react'

const ClickDemo = () => {

    function showMessage(){
        alert("Button clicked!!!")
    }

  return (
    <div>
                
        <button onClick={showMessage}>Click Me!</button>

    </div>
  )
}

export default ClickDemo