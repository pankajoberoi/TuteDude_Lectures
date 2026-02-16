import Cart from "./Components/Cart"
import Notifictions from "./Components/Notifictions"
import ProductList from "./Components/ProductList"
import UserForm from "./Components/UserForm"
import CartProvider from "./Context/CartProvider"
import NotificationsProvider from "./Context/NotificationsProvider"
import { ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';


function App() {
  

  return (
    <>
      {/* <CartProvider>
        <ProductList/>
        <Cart/>
      </CartProvider> */}

      <NotificationsProvider>
        <UserForm/>
        <Notifictions/>
        <ToastContainer />
      </NotificationsProvider>
      

      

    </>
  )
}

export default App
