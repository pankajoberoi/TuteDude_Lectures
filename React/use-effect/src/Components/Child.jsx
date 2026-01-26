import React, { useEffect } from 'react'

const Child = () => {

    useEffect(()=>{
        console.log("Child Mounted!! (With setUp function)");

        return ()=>{
            console.log("Child Unmount !!(With clean up function)");
        }

    },[])

  return (
    <div>
        I am Visible!!!!!!
    </div>
  )
}

export default Child