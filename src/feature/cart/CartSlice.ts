// src/store/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "../../types";

const syncCartWithLocalStorage = (cart: CartItem[]) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const cartSlice = createSlice({
  name: "cart",
  initialState: [] as CartItem[],
  reducers: {
    // add with increasing number
    // addToCart: (state, action: PayloadAction<CartItem>) => {
    //   const { id } = action.payload;
    //   const existingItemIndex = state.findIndex((item) => item.id === id);

    //   if (existingItemIndex !== -1) {
    //     // Use immer to update the existing item
    //     produce(state, (draft) => {
    //       draft[existingItemIndex].quantity += 1;
    //     });
    //   } else {
    //     // Use immer to add a new item to the cart
    //     produce(state, (draft) => {
    //       draft.push({ ...action.payload, quantity: 1 });
    //     });
    //   }
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const { id } = action.payload;
      const existingItem = state.find((item) => item.id === id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
      syncCartWithLocalStorage(state);
    },
    updateCartItem: (state, action: PayloadAction<CartItem>) => {
      const updatedItem = action.payload;
      const index = state.findIndex((item) => item.id === updatedItem.id);

      if (index !== -1) {
        state[index] = updatedItem;

        syncCartWithLocalStorage(state);
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      // Find the index of the item to remove
      const index = state.findIndex((item) => item.id === action.payload);
      if (index !== -1) {
        // Remove the item from the cart
        state.splice(index, 1);
        // Sync the updated cart with localStorage
        syncCartWithLocalStorage(state);
      }
    },
    clearCart: (state) => {
      // Clear the entire cart by setting it to an empty array
      state.length = 0;
      // Also, clear the cart from localStorage
      syncCartWithLocalStorage(state);
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateCartItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
