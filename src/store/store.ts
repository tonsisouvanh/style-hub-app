// src/store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/CartSlice";

const initialCart = JSON.parse(localStorage.getItem("cart") || "[]");

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
  preloadedState: {
    cart: initialCart,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
