import {Link, useNavigate} from 'react-router-dom'

function App() {
  const navigate=useNavigate()
  

  return (
    <>
      <h1>I am the Dahboard at / wala path</h1>
      {/* <Link to="/about">Go to About</Link> */}
      <button onClick={()=> navigate('/about')}>Go to About</button>
      <button onClick={()=> navigate('/settings')}>Edit Profile</button>
    </>
  )
}
 
export default App
