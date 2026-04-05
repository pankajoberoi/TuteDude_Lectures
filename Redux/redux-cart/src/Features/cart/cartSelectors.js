export const selectCartCount = (state) => state.cart.items.length;

export const selectCartItems = (state) => state.cart.items;

export const selectCartTotal = (state) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);
