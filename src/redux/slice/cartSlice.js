import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: { 
    update_cart: (state, action) =>{
        state.cart = action.payload;
      }
  },
});

export const { update_cart } = cartSlice.actions;
export default cartSlice.reducer;
