import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import Notifications from "./components/Notifications";
import { useAppSelector } from "./app/hooks";

const App = () => {
  const theme = useAppSelector(state => state.theme.mode);
  const user = useAppSelector(state => state.auth.user);

  return (
    <div
      
    >
      <Navbar />
      <hr />
      <div style={{
        background: theme === "dark" ? "#222" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        minHeight: "100vh"
      }}>
      {user && (
        <div style={{ display: "flex", gap: "40px" }}>
          <ProductList />
          <Cart />
          <Notifications />
        </div>
      )}
      </div>
      
    </div>
  );
};

export default App;
