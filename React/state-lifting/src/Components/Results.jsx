import React from 'react'

const Results = ({query}) => {

    const users=["Aman","Riya","Rohit","Neha","Pankaj","Priya"]
    const filtered = users.filter(u => u.toLowerCase().includes(query.toLowerCase()))
    console.log(filtered);
  return (
    <div>
        <ul>
            {
                filtered.map(u => <li key={u}>{u}</li>)
            }
        </ul>
    </div>
  )
}

export default Results