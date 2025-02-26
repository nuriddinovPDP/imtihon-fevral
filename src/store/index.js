import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./loginSlice";
// import loginSlice from "./loginSlice";
// import uiSlice from "./uiSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
  },
});

export default store;
