import { addToCart } from "../features/cartSlice";

export const cartMiddleware = (store) => (next) => (action) => {
  if (action.type === addToCart.type) {
    const cartItems = store.getState().cart.items;
    const productAlreadyInCart = cartItems.some(
      (item) => item.id === action.payload.id
    );

    if (productAlreadyInCart) {
      return;
    }
  }

  return next(action);
};
