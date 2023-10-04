import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { Product } from "../../types";
import { Timestamp } from "firebase/firestore";

// Function to serialize Firebase Timestamp to JavaScript Date
const serializeTimestamp = (timestamp: Timestamp) => {
  const date = timestamp.toDate();
  return date.toISOString();
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const querySnapshot = await getDocs(collection(db, "products"));

    if (!querySnapshot) {
      throw new Error("An error occurred while fetching products.");
    }

    const products = querySnapshot.docs.map((doc) => {
      const productData = doc.data();
      // Serialize the 'createdDate' field if it exists
      if (productData.createdDate) {
        productData.createdDate = serializeTimestamp(productData.createdDate);
      }
      return {
        id: doc.id,
        ...productData,
      };
    }) as Product[];
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
