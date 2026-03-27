import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

const App = () => {

  return (

    <div>

      <Navbar />

      <div style={{display:"flex",gap:"40px"}}>

        <ProductList />

        <Cart />

      </div>

    </div>

  );
};

export default App;