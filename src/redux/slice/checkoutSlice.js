import { createSlice } from "@reduxjs/toolkit";

const checkoutSlice = createSlice({
  name: "inventories",
  initialState: {
    inventories: [],
  },
  reducers: { 
    update_inventories: (state, action) =>{
        state.inventories = action.payload;
    }
  },
});

export const { update_inventories } = checkoutSlice.actions;
export default checkoutSlice.reducer;