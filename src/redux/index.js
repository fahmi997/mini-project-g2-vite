import { configureStore } from "@reduxjs/toolkit";
import createEvent from "./action/createEvent"
import eventSlice from "./slices/eventSlice";

export const globalStore = configureStore({
    reducer:{
        // place reducer here
        createEvent,
        eventSlice
        
    }
})