//dispatch -> action
//file -> action ? === addtocart
//logic -> check -> item ? cart
//if return
//else reducer

import { addToCart } from "../Features/CartSlice";

export const cartMiddleware = function (store) {
  return function (next) {
    return function (action) {
      if (action.type === addToCart.type) {
        const cartItems = store.getState().cart.items;
        const productExits = cartItems.some(
          (item) => item.id === action.payload.id,
        );

        if (productExits) {
          return;
        }
      }

      return next(action);
    };
  };
};
