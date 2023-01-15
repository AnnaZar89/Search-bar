import axios from "axios";

const baseURL = "https://randomuser.me/api/";

export const api = axios.create({
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },

  baseURL,
});
