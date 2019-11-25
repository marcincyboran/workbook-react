import axios from 'axios';

axios.defaults.baseURL = process.env.API_URL || 'https://localhost:3001/api/v1/';
axios.interceptors.request.use(req => {
    const token = localStorage.getItem('wb-auth-token');
    if (token) req.headers['X-Auth'] = `Bearer ${token}`;
    return req;
});

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log('Interceptor error logger');
        console.log(error);
        return Promise.reject(error);
    }
);

(window as any).axios = axios;

export default axios;
