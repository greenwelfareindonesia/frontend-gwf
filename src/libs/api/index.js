import axios from "axios";

// const token = localStorage.getItem("token");

const API = axios.create({
  baseURL: "https://backend-gwf-production.up.railway.app/",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
});

export default API;
