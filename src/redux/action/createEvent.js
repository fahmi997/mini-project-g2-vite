import { createSlice } from "@reduxjs/toolkit";
// import API_CALL from "../../helper";

const createEvent = createSlice({
    name: 'createEvent',
    initialState: {
        event: [],
        location: [],
        ticket: [],
    },
    reducers: {
        setLocation: (state, action) => {
            // console.log("From Reducers:",action.payload)
            state.location = action.payload;
        },
        setEvent: (state, action) => {
            // console.log("setEvent Reducer:",action.payload);
            state.event = action.payload;
        },
        setTicket: (state, action) => {
            state.ticket = action.payload;
        }
    }
});

export const { setLocation, setEvent, setTicket } = createEvent.actions;
export default  createEvent.reducer;

//Middlewares