import axios from "axios";
import router from '@/router';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://192.168.1.130:8080/';


const apiClient = axios.create({
    baseURL: '/',
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});


apiClient.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 500) {
            localStorage.removeItem('token');
            router.replace('/login')
        } 
    }
)

export default apiClient;