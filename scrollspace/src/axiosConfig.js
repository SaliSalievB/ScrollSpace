// axiosConfig.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://localhost:7295/api',
});

instance.interceptors.request.use(config => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
},
(error) => Promise.reject(error)
);

// Response interceptor to handle errors
instance.interceptors.response.use(
(response) => response,
(error) => {
  // Handle 401 Unauthorized errors
  if (error.response && error.response.status === 401) {
    // Optionally, redirect to login page
    localStorage.removeItem('token');
    // You might need to use a global state or context to navigate from here
  }
  return Promise.reject(error);
}
);

export default instance;
