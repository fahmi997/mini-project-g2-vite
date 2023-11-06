import { createSlice } from "@reduxjs/toolkit";
import { API_CALL } from "../../helper";
import axios from "axios";

const accountSlice = createSlice({
  name: "account",
  initialState: {
    email: "",
    password: "",
    role: "",
  },
  reducers: {
    login: (state, action) => {
        state.email = action.payload.email
        state.password = action.payload.password
        state.role = action.payload.role
    },
    logout: (state, action) =>{
        state= {
            email: "",
            password: "",
            role: ""
        }
    }
  }
});

export const {login, logout}=accountSlice.actions
export default accountSlice.reducer

export const checkDataAccount = () =>{
    return async(dispatch) =>{
        try {
            // let token = localStorage.getItem("login_token")
            // if(token){
                const getAccount = await axios.get( `${API_CALL}/account/login`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                localStorage.setItem("login_token", getAccount.data.result.token)

                dispatch({
                    type: "LOGIN_SUCCES",
                    payload: getAccount.data
                })
            // }
            console.log();

        } catch (error) {
            console.log(error);
            // dispatch(logout())
        }
    }
}