import { configureStore } from "@reduxjs/toolkit";
import createEvent from "./action/createEvent"
import accountSlice from "./slice/accountSlice";

export const globalStore = configureStore({
    reducer:{
        // place reducer here
        accountSlice,
        createEvent
    }
})