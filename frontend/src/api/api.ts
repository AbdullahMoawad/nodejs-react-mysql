import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL
});

api.interceptors.request.use(function (config) {
    return {
        ...config, headers: {
            'Authorization': typeof window !== "undefined" ? window.localStorage.getItem('x-token') : '',
        }
    };
}, function (error) {
    return Promise.reject(error);
});

api.interceptors.response.use(res => res, error => {
        if (error?.response?.status === 403) console.table(error.response);
        if (error?.response?.status === 401) {
            window.location.href = "/login";
        }
        console.error('error', error);
        return error
    }
)

export default api;