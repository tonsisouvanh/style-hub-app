import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase";
import { Product } from "../../types";
import { Timestamp } from "firebase/firestore";

// Function to serialize Firebase Timestamp to JavaScript Date
const serializeTimestamp = (timestamp: Timestamp) => {
  const date = timestamp.toDate();
  return date.toISOString();
};

export const addProduct = createAsyncThunk<Product, Omit<Product, "id">>(
  "products/addProduct",
  async (newProduct) => {
    try {
      const currentDate = new Date();

      // Add the new product to the Firestore collection
      const docRef = await addDoc(collection(db, "products"), {
        ...newProduct,
        createdDate: currentDate,
      });
      return {
        id: docRef.id,
        ...newProduct,
      };
    } catch (error) {
      throw new Error("An error occurred while adding the product.");
    }
  },
);
export const deleteProduct = createAsyncThunk<void, string>(
  "products/deleteProduct",
  async (productId) => {
    try {
      // Construct the Firestore document reference for the product
      const productRef = doc(db, "products", productId);

      // Delete the product document from Firestore
      await deleteDoc(productRef);
    } catch (error) {
      throw new Error("An error occurred while deleting the product.");
    }
  },
);

export const updateProduct = createAsyncThunk<Product, Product>(
  "products/updateProduct",
  async (updatedProduct) => {
    const currentDate = new Date();

    try {
      // Construct the Firestore document reference for the product
      const productRef = doc(db, "products", updatedProduct.id || "");

      // Update the product document in Firestore
      await setDoc(productRef, { ...updatedProduct, createdDate: currentDate });

      return updatedProduct;
    } catch (error) {
      throw new Error("An error occurred while updating the product.");
    }
  },
);

export const fetchProducts = createAsyncThunk<Product[]>(
  "products/fetchProducts",
  async () => {
    const querySnapshot = await getDocs(collection(db, "products"));

    if (!querySnapshot) {
      console.log(new Error("An error occurred while fetching products."));
      throw new Error("An error occurred while fetching products.");
    }

    const products = querySnapshot.docs.map((doc) => {
      const productData = doc.data();
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
      })
      // ADD
      .addCase(addProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
      .addCase(addProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "";
      })
      // DELETE
      .addCase(deleteProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Remove the deleted product from the state
        state.data = state.data.filter(
          (product) => product.id !== action.meta.arg,
        );
      })
      .addCase(deleteProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "";
      })
      // UPDATE
      .addCase(updateProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Find and update the product in the state
        const updatedProduct = action.payload;
        const productIndex = state.data.findIndex(
          (product) => product.id === updatedProduct.id,
        );
        if (productIndex !== -1) {
          state.data[productIndex] = updatedProduct;
        }
      })
      .addCase(updateProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "";
      });
  },
});

export default productSlice.reducer;
