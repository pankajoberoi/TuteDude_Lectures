import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import { cartMiddleware } from "../middleware/cartMiddleware";

// configureStore creates Redux store
export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  middleware: () => [cartMiddleware],
});
