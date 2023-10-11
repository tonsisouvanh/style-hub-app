import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../feature/cart/CartSlice";
import productReducer, { fetchProducts } from "../feature/product/ProductSlice";
import categoryReducer, {
  fetchCategories,
} from "../feature/categories/CategorySlice";
import authReducer from "../feature/auth/AuthSlice";

const initialCart = JSON.parse(localStorage.getItem("cart") || "[]");

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    categories: categoryReducer,
    user: authReducer,
  },
  preloadedState: {
    cart: initialCart,
  },
});

store.dispatch(fetchProducts());
store.dispatch(fetchCategories());

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
