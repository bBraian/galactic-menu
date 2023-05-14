import axios from "axios";

export const api = axios.create({
    // baseURL: 'https://galaxy-server.onrender.com',
    baseURL: 'localhost:3000',
})