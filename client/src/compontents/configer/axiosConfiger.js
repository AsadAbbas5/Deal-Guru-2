import axios from "axios";
export default function configerAxios(store) {
  axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
  axios.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = "Bearer " + token;
        }
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
}
