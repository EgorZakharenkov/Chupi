"use client";

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import api from "@/constants/axiosBase";

interface Values {
  username?: string;
  email: string;
  password: string;
}

export const fetchUserData = createAsyncThunk(
  "auth/fetchUserData",
  async (params: Values) => {
    const { data } = await api.post("/auth/login", params);
    return data;
  },
);

export const fetchRegister = createAsyncThunk(
  "auth/fetchRegister",
  async (params: Values) => {
    const { data } = await api.post("/auth/register", params);
    return data;
  },
);
type UserProps = {
  _id: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  username: string;
  email: string;
  favoriteTracks: string[];
};
export interface PropsState {
  user: {
    access_token: string;
    refresh_token: string;
    userData: UserProps;
  } | null;
}
const initialState: PropsState = {
  user: null,
};

export const counterSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.pending, (state) => {
      state.user = null;
    });
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchUserData.rejected, (state) => {
      state.user = null;
    });
    builder.addCase(fetchRegister.pending, (state) => {
      state.user = null;
    });
    builder.addCase(fetchRegister.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchRegister.rejected, (state) => {
      state.user = null;
    });
  },
});

export const { logout } = counterSlice.actions;

export default counterSlice.reducer;
