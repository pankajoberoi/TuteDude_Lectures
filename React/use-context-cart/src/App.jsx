import Cart from "./Components/Cart"
import Form from "./Components/Form"
import Notification from "./Components/Notification"
import ProductList from "./Components/ProductList"
import CartProvider from "./Context/CartProvider"
import { NotificationProvider } from "./Context/NotificationProvider"

function App() {
  

  return (
    <>
      {/* <CartProvider>
        <ProductList/>
        <Cart/>
      </CartProvider> */}

      <NotificationProvider>
        <Form/>
        <Notification/>
      </NotificationProvider>

    </>
  )
}

export default App
