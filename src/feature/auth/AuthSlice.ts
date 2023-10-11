import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase"; // Import your Firebase auth instance
import { Auth } from "../../types";
import { toast } from "react-toastify";

// Define a new async thunk for logging out
export const signOutUser = createAsyncThunk(
  "auth/signOut",
  async (_, { rejectWithValue }) => {
    try {
      await signOut(auth);
      sessionStorage.removeItem("user");
      return null;
    } catch (error: any) {
      const errorMessage = error.message;
      return rejectWithValue(errorMessage.toString() as string);
    }
  },
);

export const signIn = createAsyncThunk<
  Auth | null,
  { email: string; password: string },
  { rejectValue: string }
>("auth/signIn", async ({ email, password }, { rejectWithValue }) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;
    const authData: Auth = {
      email: user.email || "",
      token: user.uid,
    };
    sessionStorage.setItem("user", JSON.stringify(authData));
    return authData;
  } catch (error: any) {
    toast.error("Email or password incorrect!");
    const errorMessage = error.message;
    return rejectWithValue(errorMessage.toString());
  }
});

const authSlice = createSlice({
  name: "user",
  initialState: {
    user: null as Auth | null,
    status: "idle" as "idle" | "loading" | "succeeded" | "failed",
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // sign in
      .addCase(signIn.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.user = action.payload;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action) => {
        state.status = "failed";
        state.user = null;
        state.error = action.payload || "An error occurred during sign-in.";
      })
      // sign out
      .addCase(signOutUser.pending, (state) => {
        state.status = "loading";
      })
      .addCase(signOutUser.fulfilled, (state) => {
        state.status = "idle";
        state.user = null; // Set the user to null to indicate that they are logged out
        state.error = null;
      })
      .addCase(signOutUser.rejected, (state, action) => {
        state.status = "failed";
        state.user = null;
        state.error =
          (action.payload as string) || "An error occurred during sign-in.";
      });
  },
});

export default authSlice.reducer;
