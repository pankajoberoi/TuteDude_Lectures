import { products } from "../data/products";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addToCart } from "../features/cart/cartSlice";
import { addNotification } from "../features/notification/notificationSlice";

const ProductList = () => {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);

  const handleAdd = (product) => {
    const productExists = cartItems.some((item) => item.id === product.id);

    if (productExists) {
      dispatch(addNotification(`${product.name} is already in cart`));
      return;
    }

    dispatch(addToCart(product));
    dispatch(addNotification(`${product.name} added to cart`));
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          <h4>{product.name}</h4>
          <p>₹{product.price}</p>
          <button onClick={() => handleAdd(product)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
