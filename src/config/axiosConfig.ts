import axios from "axios";

export const usersAPI = axios.create({
  baseURL: import.meta.env.VITE_APP_GET_API,
  headers: {
    "Content-type": "application/json",
  },
});

export const usersAPIPost = axios.create({
  baseURL: import.meta.env.VITE_APP_POST_API,
  headers: {
    "Content-Type": "application/json",
  },
});
