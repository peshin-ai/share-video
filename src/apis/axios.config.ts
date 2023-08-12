import axios from "axios";

// Axios configuration with headers
const server = axios.create({
  baseURL: `http://localhost:5000`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

server.interceptors.request.use(async (config) => {
  // const token = sessionStorage.getItem("token");
  // if (token) {
  // config.headers.Authorization = `Bearer ${token}`;
  // }
  return config;
});

server.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
  },
  (error) => {
    throw error;
  }
);

export default server;
