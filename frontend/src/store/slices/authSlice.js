//slice
import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../thunks/fetchUser";

const authSlice = createSlice({
  name: "auth",
  initialState: {},
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state, action) => {
      console.log(state);
      console.log(action);
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log(state);
      console.log(action);
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      console.log(state);
      console.log(action);
    });
  },
});

export const authReducer = authSlice.reducer;
