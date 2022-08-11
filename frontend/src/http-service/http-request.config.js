import axios from "axios";

const USER_TOKEN = localStorage.getItem("USER_TOKEN");

axios.interceptors.request.use(
  (config) => {
    /** In dev, intercepts request and logs it into console for dev */
    config.headers["Authorization"] = `Bearer ${USER_TOKEN}`;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axios;
