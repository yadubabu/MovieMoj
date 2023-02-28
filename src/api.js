import axios from "axios";

export const api = axios.create({
  baseURL: "http://www.omdbapi.com/?i=tt3896198&apikey=caa0f709",
});
