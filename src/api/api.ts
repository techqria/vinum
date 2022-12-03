import axios from "axios";

const api = axios.create({
  baseURL: "https://vinum-api.vercel.app",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Credentials": "true",
  }
});

export default api;
