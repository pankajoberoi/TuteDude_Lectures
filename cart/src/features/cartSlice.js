import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,

  reducers: {
    // Add product to cart
    addToCart: (state, action) => {
      // payload contains product data
      state.items.push(action.payload);
    },

    // Remove product from cart
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});

// exporting actions
export const { addToCart, removeFromCart } = cartSlice.actions;

// exporting reducer
export default cartSlice.reducer;
