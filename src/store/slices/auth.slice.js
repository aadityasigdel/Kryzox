import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuthenticate: false,
};

const authSlices = createSlice({
  name: "authslice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticate = true;
    },
    logout: (state, action) => {
      state.isAuthenticate = false;
    },
  },
});
export const { login, logout } = authSlices.actions;
export default authSlices.reducer;
