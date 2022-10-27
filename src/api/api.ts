import axios from "axios";

const api = axios.create({
  baseURL: "https://vinum-wine.herokuapp.com",
  headers: {
    'Content-Type': 'application/json',
    "AllowOrigin" : "*"
  }
});

export default api;