import { useAppSelector, useAppDispatch } from "../app/hooks";
import { removeFromCart } from "../features/cart/cartSlice";
import { selectCartItems, selectCartTotal } from "../features/cart/cartSelectors";

const Cart = () => {
  const items = useAppSelector(selectCartItems);
  const total = useAppSelector(selectCartTotal);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {items.map(item => (
        <div key={item.id}>
          <p>{item.name} - ₹{item.price}</p>
          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}
      <h3>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;