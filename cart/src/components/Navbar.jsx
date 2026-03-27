import { useSelector } from "react-redux";

const Navbar = () => {

  // accessing cart state
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <div style={{background:"#222",color:"white",padding:"10px"}}>

      <h2>Shopping Cart App</h2>

      <p>Cart Items: {cartItems.length}</p>

    </div>
  );
};

export default Navbar;