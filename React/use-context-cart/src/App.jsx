import { ToastContainer } from "react-toastify"
import Cart from "./Components/Cart"
import Notifictions from "./Components/Notifictions"
import ProductList from "./Components/ProductList"
import UserForm from "./Components/UserForm"
import CartProvider from "./Context/CartProvider"
import NotificationsProvider from "./Context/NotificationsProvider"



function App() {
  

  return (
    <>
    <NotificationsProvider>
      <CartProvider>
        <ProductList/>
        <Cart/>
        <Notifictions/>
        <ToastContainer/>
      </CartProvider>
    </NotificationsProvider>

      <NotificationsProvider>
        <UserForm/>
        <Notifictions/>
        <ToastContainer/>
      </NotificationsProvider>
      

      

    </>
  )
}

export default App
