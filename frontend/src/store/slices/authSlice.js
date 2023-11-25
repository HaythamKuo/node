import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUser";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    userData: {},
    error: null,
    isLoading: false,
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLogin = true;

      state.userData = { ...action.payload };
      state.isLoading = false;
      console.log(action.payload);
      state.error = null;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
  },
});

export const authReducer = authSlice.reducer;
