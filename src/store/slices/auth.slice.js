import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn:false,
  isAuthenticate: false,
  role:"ROLE_NORMAL",
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
    setRole:(state,action)=>{
      state.role=action.payload.role;
    }
  },
});
export const { login, logout ,setRole} = authSlices.actions;
export default authSlices.reducer;
