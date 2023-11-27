import { configureStore } from "@reduxjs/toolkit";
import createEvent from "./action/createEvent"
import accountSlice from "./slice/accountSlice";
import eventSlice from "./slices/eventSlice";
import checkoutSlice from "./slice/checkoutSlice";
import cartSlice from "./slice/cartSlice";

export const globalStore = configureStore({
    reducer:{
        // place reducer here
        accountSlice,
        createEvent,
        eventSlice,
        checkoutSlice,
        cartSlice
    }
})