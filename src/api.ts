import axios from 'axios'

export const API_ROUTES = {
    meditations: 'meditations',
    registration: 'auth/register',
    login: 'auth/login',
    profile: 'profile',
};

export const http = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
})

export const httpAuth = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 10000,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('meditation-auth-token')}`
    }
})
