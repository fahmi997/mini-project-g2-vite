import { configureStore } from "@reduxjs/toolkit";
import accountSlice from "./slice/accountSlice";

export const globalState = configureStore({
  reducer: {
    accountSlice,
  },
});
