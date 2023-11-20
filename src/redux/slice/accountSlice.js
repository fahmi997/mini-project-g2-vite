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
        console.log("INI ACTION PAYLOAD", action);
        state.email = action.payload.email
        state.password = action.payload.password
        state.role = action.payload.role
        state.name = action.payload.nama_Lengkap
    },
    logout: (state, action) =>{
        state = {
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
            let token = localStorage.getItem("login")
            if(token){
                const getAccount = await axios.get(`http://localhost:2099/account/keeplogin`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })
                console.log("GET ACCOUNT BREE", getAccount);
                localStorage.setItem("login", getAccount.data.result.token)

                dispatch(login(getAccount.data))
            }
            console.log();

        } catch (error) {
            console.log(error);
            dispatch(logout())
        }
    }
}