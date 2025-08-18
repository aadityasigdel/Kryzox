import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn:false,
  isAuthenticate: false,
  role:"ROLE_NORMAL",
  loggedInUserInfo:{}
};

const authSlices = createSlice({
  name: "authslice",
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true;
    },
    logout: (state) => {
      state.isLoggedIn = false;
    },
    setRole:(state ,action)=>{
      state.role=action.payload.role;
    },
    setLoggedData:(state,action)=>{
      state.loggedInUserInfo=action.payload;
    }
  },
});
export const { login, logout ,setRole,setLoggedData} = authSlices.actions;
export default authSlices.reducer;
