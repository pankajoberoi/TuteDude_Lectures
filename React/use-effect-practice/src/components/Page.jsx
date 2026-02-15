import React, { useEffect, useState } from 'react'
import { fetchDetails } from './APi'

const Page = () => {
    const[person,setPerson]=useState('Pankaj')
    const[bio,setBio]=useState(null)

    useEffect(()=>{
        let Request=true
        //setBio(null)
        fetchDetails(person).then(result => {
            if(Request){
                setBio(result)
            }
        })
        return () =>{
            Request=false
        }
    },[person])

  return (
    <div>
        <select value={person} onChange={e => {setPerson(e.target.value)}}>
            <option value="Pankaj">Pankaj</option>
            <option value="Khushi">Khushi</option>
            <option value="Raj">Raj</option>
        </select>
        <hr />
        <p>{bio ?? 'Loading...'}</p>
    </div>
  )
}

export default Page