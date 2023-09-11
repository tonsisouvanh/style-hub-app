// productSlice.ts
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs, query } from "firebase/firestore"; // Import Firestore functions from the Firebase package
import { db } from "../../firebase"; // Import your Firebase configuration
import { Product } from "../../types";

// Define an asynchronous thunk to fetch products from Firestore
export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const querySnapshot = await getDocs(collection(db, "products"));

    // Perform specific error checks here, if needed
    if (!querySnapshot) {
      throw new Error("An error occurred while fetching products.");
    }

    const products = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Product[];
    return products;
  },
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    data: [] as Product[],
    status: "idle" as "idle" | "loading" | "succeeded" | "failed",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "";
      });
  },
});

export default productSlice.reducer;
