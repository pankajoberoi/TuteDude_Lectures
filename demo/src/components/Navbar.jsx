import { useAppSelector, useAppDispatch } from "../app/hooks";
import { logout, login } from "../features/auth/authSlice";
import { toggleTheme } from "../features/theme/themeSlice";
import { selectCartCount } from "../features/cart/cartSelectors";

const Navbar = () => {
  const user = useAppSelector(state => state.auth.user);
  const cartCount = useAppSelector(selectCartCount);
  const dispatch = useAppDispatch();

  return (
    <div style={{ background: "#333", color: "white", padding: "10px" }}>
      <h2>Redux Shop</h2>
      <p>Cart Items: {cartCount}</p>

      {user ? (
        <>
          <span>Welcome {user.name}</span>
          <button onClick={() => dispatch(logout())}>
            Logout
          </button>
        </>
      ) : (
        <button onClick={() => dispatch(login({ name: "Pankaj" }))}>
          Login
        </button>
      )}

      <button onClick={() => dispatch(toggleTheme())}>
        Toggle Theme
      </button>
    </div>
  );
};

export default Navbar;