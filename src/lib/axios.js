import axios from "axios";

export const api = axios.create({
    // baseURL: 'https://galaxy-server.onrender.com',
    baseURL: 'http://localhost:3000',
})