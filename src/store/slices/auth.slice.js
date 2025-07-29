import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn:false,
  isAuthenticate: false,
};

const authSlices = createSlice({
  name: "authslice",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
    },
    logout: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});
export const { login, logout } = authSlices.actions;
export default authSlices.reducer;
