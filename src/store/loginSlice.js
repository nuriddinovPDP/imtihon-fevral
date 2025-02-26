import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logiIn: (state, action) => {
      state.isLoggedIn = true;
    },
    logOut: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const logiActions = loginSlice.actions;

export default loginSlice;
