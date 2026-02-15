import ThemeButton from "./Components/ThemeButton"
import ThemeProvider from "./Context/ThemeProvider"
import Form from "./Components/Form"


function App() {
  

  return (
    <>
      <ThemeProvider>
        <ThemeButton/>
        <Form/>
      </ThemeProvider>
    </>
  )
}

export default App
