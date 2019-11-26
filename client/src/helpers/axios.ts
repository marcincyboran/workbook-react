import axios from 'axios';
import { store } from '../redux/store';
import CONSTANTS from './constants';

axios.defaults.baseURL = process.env.API_URL || `http://localhost:5000/api/v1/`;
axios.interceptors.request.use(req => {
    const system = store.getState().system;
    const token = system.user ? system.user.token : localStorage.getItem(CONSTANTS.WB_AUTH_TOKEN);
    if (token) req.headers[CONSTANTS.AUTH_HEADER_NAME] = `Bearer ${token}`;
    return req;
});

axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log('Interceptor error logger');
        return Promise.reject(error);
    }
);

(window as any).axios = axios;

export default axios;
