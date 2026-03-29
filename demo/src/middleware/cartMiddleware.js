import { addToCart } from "../features/cart/cartSlice";

export const cartMiddleware = (store) => (next) => (action) => {
  if (action.type === addToCart.type) {
    const cartItems = store.getState().cart.items;
    const productExists = cartItems.some(
      (item) => item.id === action.payload.id
    );

    if (productExists) {
      return;
    }
  }

  return next(action);
};
