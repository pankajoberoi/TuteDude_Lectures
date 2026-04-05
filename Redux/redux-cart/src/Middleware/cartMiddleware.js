//dispatch -> action
//file -> action ? === addtocart
//logic -> check -> item ? cart
//if return
//else reducer

import { addToCart } from "../Features/cart/CartSlice";
import { addNotification } from "../Features/notification/notification";
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

      if (action.type === addNotification.type) {
        const notifiationsList = store.getState().notification.list;
        const notificationExits = notifiationsList.some(
          (item) => item.message === action.payload,
        );

        if (notificationExits) {
          return;
        }
        //if item already exits addNotification => payload (laptop already exits)
      }

      return next(action);
    };
  };
};
