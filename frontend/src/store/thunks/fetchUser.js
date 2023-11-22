import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

/**
 * 創建異步action creators
 */
const fetchUser = createAsyncThunk("users/fetch", async () => {
  const res = await axios.get("/api/current_user");
  console.log(`🫠${res}`);
  return res.data;
});

export { fetchUser };
