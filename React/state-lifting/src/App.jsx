import Quantity from "./Components/Quantity"
import { useState } from "react"
import Total from "./Components/Total"
import SearchApp from "./Components/SearchApp"

function App() {
  
  // const [qty,setQty]=useState(0)
  // const price=500

  return (
    <>
    
      {/* <Quantity qty={qty} setQty={setQty}/>

      <h2>{qty} : qty in parent component</h2>

      <Total qty={qty} price={price}/> */}

      <SearchApp/>
    
    </>
  )
}

export default App
