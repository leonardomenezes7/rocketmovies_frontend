import axios from "axios"

export const api = axios.create({
  baseURL: "https://rocketmovies-api-9pu7.onrender.com"
})