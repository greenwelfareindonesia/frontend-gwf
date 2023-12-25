import axios from "axios";

const token = localStorage.getItem("token");

const API = axios.create({
  baseURL: "https://backend-gwf-production.up.railway.app/api",
  headers: {
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  },
});

export default API;
