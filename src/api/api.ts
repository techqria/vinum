import axios from "axios";

const api = axios.create({
  baseURL: "https://vinum-wine.herokuapp.com",
  headers: {
    'Content-Type': 'application/json',
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Methods" : "*",
    "Access-Control-Allow-Headers" : "*",
  }
});

export default api;