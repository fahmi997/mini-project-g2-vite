import { createSlice } from "@reduxjs/toolkit";
// import API_CALL from "../../helper";

const createEvent = createSlice({
    name: 'createEvent',
    initialState: {
        event: [],
        location: [],
        ticket: [],
        ticketTypes: [],
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
            // console.log("action.payload",action.payload);
            state.ticket = action.payload;
            // console.log("state.ticket",state.ticket);
        },
        deleteTicket: (state, action) => {
            state.ticket.splice(action.payload, 1);
        },
        editTicket: (state, action) => {
            state.ticket[action.payload] = action.payload;
        }
    }
});

export const { setLocation, setEvent, setTicket, deleteTicket, editTicket } = createEvent.actions;
export default  createEvent.reducer;

//Middlewares
// export const deleteTicket = (index) => async (dispatch) => {
//     console.log("Middleware deleteTicket",index);
// };