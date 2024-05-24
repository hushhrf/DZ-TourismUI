import axios from "axios";

const apiRequest = axios.create({
  withCredentials: true,
});
apiRequest.interceptors.request.use(
    (config) => {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
);
export default apiRequest;