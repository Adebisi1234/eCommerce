import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import axios, { AxiosError } from "axios";
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;
axios.defaults.baseURL = BACKEND_URL;
axios.defaults.withCredentials = true;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (request) => {
    request.headers.Authorization = localStorage.getItem("token");
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    // Edit response config
    return response;
  },
  async (error: AxiosError) => {
    try {
      if (
        error.response?.status === 401 &&
        !error.config?.url?.includes("refresh")
      ) {
        const { data } = await axios.get("/user/refresh");
        localStorage.setItem("token", `Bearer ${data.token}`);
        error.status = 501;
      }
      return Promise.reject(error);
    } catch (err) {
      error.status = 502;
      return Promise.reject(error);
    }
  }
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </BrowserRouter>
);
