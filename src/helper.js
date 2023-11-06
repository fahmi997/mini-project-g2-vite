import axios from "axios";

export const API_CALL = axios.create({
    baseURL: "http://localhost:2099"
})