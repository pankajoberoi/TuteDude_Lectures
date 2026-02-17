import React from 'react'
import {Link} from 'react-router-dom'

const About = () => {
  return (
    <div>
        <h1>i am About section at /about path</h1>
        <button><Link to="/">Back to DashBoard</Link></button>

    </div>
    
  )
}

export default About