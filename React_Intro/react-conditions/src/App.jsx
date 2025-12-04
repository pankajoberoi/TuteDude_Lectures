// import GreetMessage from "./Components/GreetMessage"
// import Status from "./Components/Status"
// import Offer from "./Components/Offer"
import UserRole from "./Components/UserRole"

function App() {

  // let isLoggedIn=false;
  //  let ActiveStatus=true;
  // let price=400
  let role="admin"

  return (
    <>
      {/* <GreetMessage status={isLoggedIn}/> */}
      {/* <Status status={ActiveStatus}/> */}

      {/* <Offer price={price}/> */}

      <UserRole role={role}/>


    </>
  )
}

export default App
