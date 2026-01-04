import React from 'react'

const Status = ({status}) => {
    // let ActiveStatus=true
  return (
    <div>

        <h2>User is {status ? "ONLINE" :"OFFLINE"}, based on your activity status</h2>

    </div>
  )
}

export default Status