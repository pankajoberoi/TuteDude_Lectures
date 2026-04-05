import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/cart/CartSlice";
import { cartMiddleware } from "../Middleware/cartMiddleware";
import notificationReducer from "../Features/notification/notification";
import authReducer from "../Features/auth/authSlice";
import themeReducer from "../Features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    notification: notificationReducer,
    auth: authReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) => {
    const defaultMiddleware = getDefaultMiddleware();
    const allMiddlewares = defaultMiddleware.concat(cartMiddleware);
    return allMiddlewares;
  },
});

// redux store

// {
//     cart : {items : []}
// }
