import ProfileCard from "./Components/ProfileCard"
import User from "./Components/User"
// import Welcome from "./Components/Welcome"

function App() {
  


  return (
    <div>
      {/* <Welcome/>
      <Welcome/>
      <Welcome/>
      <Welcome/> */}

      <User color="blue"/>

      <ProfileCard heading="Virat Kohli" img="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Virat_Kohli_in_PMO_New_Delhi.jpg/500px-Virat_Kohli_in_PMO_New_Delhi.jpg" desc="Best Captain"/>

      <ProfileCard heading="Rohit Sharma" img="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg/500px-Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg" desc="Best Opener"/>
  


      {/* <User name="Pankaj"/>
      <User name="Aakash"/>
      <User name="Rohit"/>
      <User name="Mohit"/> */}


    </div>
  )
}

export default App
