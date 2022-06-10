import axios from "axios";

export const API_URL = "http://localhost:5000/api/v1";
export const SERVER_URL = "http://localhost:5000";
const TOKEN = "";

export const publicRequest = axios.create({
    baseURL: API_URL
});

export const privateRequest = axios.create({
    baseURL: API_URL,
    withCredentials: true
});

export const userRequest = axios.create({
    baseURL: API_URL,
    header: {token: `Bearer ${TOKEN}`}
});