import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/CartSlice";
import productReducer, { fetchProducts } from "../feature/product/ProductSlice";

const initialCart = JSON.parse(localStorage.getItem("cart") || "[]");

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
  },
  preloadedState: {
    cart: initialCart,
  },
});
store.dispatch(fetchProducts());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
