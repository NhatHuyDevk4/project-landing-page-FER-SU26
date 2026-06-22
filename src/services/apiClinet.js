import axios from "axios";
export const BASE_URL = "https://dummyjson.com";

export const apiClient = axios.create({
  baseURL: BASE_URL,
  headers: { 
     "Content-Type": "application/json",
   }
})


// Axios thực chất là một function được bọc wrapped function sẽ có các method như get, post, put, delete, patch, head, options, request để thực hiện các request HTTP.