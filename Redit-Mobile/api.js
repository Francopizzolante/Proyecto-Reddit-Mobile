import axios from 'axios';

// Cambia esta URL por la dirección de tu backend
const API_URL = 'http://192.168.1.19:3000/api'; 

const api = axios.create({
  baseURL: API_URL,
  timeout: 5000,
});

export default api;
