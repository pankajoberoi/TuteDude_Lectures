import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../Features/CartSlice";
import { cartMiddleware } from "../Middleware/cartMiddleware";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
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
