import axios from "axios";

const baseURL = "http://localhost:4444"; // Замените на ваш базовый URL

const api = axios.create({
  baseURL,
});

export default api;
