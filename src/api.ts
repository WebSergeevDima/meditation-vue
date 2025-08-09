import axios from 'axios'

export const API_ROUTES = {
    meditations: 'meditations',
    registration: 'auth/register',
    login: 'auth/login',
    profile: 'profile',
    feel: 'stats',
};

export const http = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
})

export const httpAuth = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
});

httpAuth.interceptors.request.use((config) => {
    const token = localStorage.getItem('meditation-auth-token');

    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    } else {
        // Важно: не отправлять пустой/старый заголовок
        if (config.headers && 'Authorization' in config.headers) {
            delete config.headers.Authorization;
        }
    }

    return config;
}, (error) => Promise.reject(error));