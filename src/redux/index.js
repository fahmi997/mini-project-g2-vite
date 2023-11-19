// src/redux/index.js
import { configureStore } from "@reduxjs/toolkit";
import eventReducer from "./slices/eventSlice";

export const globalState = configureStore({
  reducer: {
    event : eventReducer
  }
});
