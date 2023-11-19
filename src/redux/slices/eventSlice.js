import { createSlice } from "@reduxjs/toolkit";

const eventSlice = createSlice({
  name: "event",
  initialState: {
    eventData: [], // Menyimpan data acara
  },
  reducers: {
    setEventData: (state, action) => {
      state.eventData = action.payload;
    },
  },
});

export const { setEventData } = eventSlice.actions;
export const selectEventData = (state) => state.event.eventData;

export default eventSlice.reducer;
