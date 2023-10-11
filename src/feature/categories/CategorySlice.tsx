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
import { Category } from "../../types";

export const addCategory = createAsyncThunk<Category, string>(
  "categories/addCategory",
  async (newCategory) => {
    try {
      // Add the new category to the Firestore collection
      const docRef = await addDoc(collection(db, "categories"), {
        name: newCategory,
      });

      // Return the added category name
      return { id: docRef.id, name: newCategory };
    } catch (error) {
      throw new Error("An error occurred while adding the category.");
    }
  },
);

export const deleteCategory = createAsyncThunk<void, string>(
  "categories/deleteCategory",
  async (categoryId) => {
    try {
      // Construct the Firestore document reference for the category
      const categoryRef = doc(db, "categories", categoryId);

      // Delete the category document from Firestore
      await deleteDoc(categoryRef);
    } catch (error) {
      throw new Error("An error occurred while deleting the category.");
    }
  },
);

export const updateCategory = createAsyncThunk<Category, Category>(
  "categories/updateCategory",
  async (updatedCategory) => {
    const currentDate = new Date();

    try {
      // Construct the Firestore document reference for the category
      const categoryRef = doc(db, "categories", updatedCategory.id || "");

      // Update the category document in Firestore
      await setDoc(categoryRef, {
        ...updatedCategory,
        createdDate: currentDate,
      });

      return updatedCategory;
    } catch (error) {
      throw new Error("An error occurred while updating the category.");
    }
  },
);

export const fetchCategories = createAsyncThunk<Category[]>(
  "categories/fetchCategories",
  async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));

    if (!querySnapshot) {
      console.log(new Error("An error occurred while fetching categories."));
      throw new Error("An error occurred while fetching categories.");
    }

    const categories = querySnapshot.docs.map((doc) => {
      const categoryData = doc.data();
      return {
        id: doc.id,
        ...categoryData,
      };
    }) as Category[];
    return categories;
  },
);
const categorySlice = createSlice({
  name: "categories",
  initialState: {
    data: [] as Category[],
    status: "idle" as "idle" | "loading" | "succeeded" | "failed",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "";
      })
      // ADD
      .addCase(addCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data.push(action.payload);
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "";
      })
      // DELETE
      .addCase(deleteCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Remove the deleted category from the state
        state.data = state.data.filter(
          (category) => category.id !== action.meta.arg,
        );
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "";
      })
      // UPDATE
      .addCase(updateCategory.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Find and update the category in the state
        const updatedCategory = action.payload;
        const categoryIndex = state.data.findIndex(
          (category) => category.id === updatedCategory.id,
        );
        if (categoryIndex !== -1) {
          state.data[categoryIndex] = updatedCategory;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "";
      });
  },
});

export default categorySlice.reducer;
