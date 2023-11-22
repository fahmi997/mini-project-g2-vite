import { configureStore } from "@reduxjs/toolkit";
import createEvent from "./action/createEvent"

export const globalStore = configureStore({
    reducer:{
        // place reducer here
        createEvent
    }
})