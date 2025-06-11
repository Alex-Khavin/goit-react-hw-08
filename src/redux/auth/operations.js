import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://connections-api.goit.global/";

export const registerUser = createAsyncThunk(
  "auth/register",
  async (values, thunkAPI) => {
    try {
      const res = await axios.post("/users/signup", values);
      axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/login",
  async (values, thunkAPI) => {
    try {
      const res = await axios.post("/users/login", values);
      axios.defaults.headers.Authorization = `Bearer ${res.data.token}`;
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async () => {
    await axios.post("/users/logout");
    axios.defaults.headers.Authorization = "";
});

export const refreshUser = createAsyncThunk("auth/refresh", async (_, thunkAPI) => {
    const reduxState = thunkAPI.getState();
    axios.defaults.headers.Authorization = `Bearer ${reduxState.auth.token}`;
    const res = await axios.get("/users/current");
    return res.data;
}, {
    condition: (_, thunkAPI) => {
        const reduxState = thunkAPI.getState();
        return reduxState.auth.token !== null;
    }
});

