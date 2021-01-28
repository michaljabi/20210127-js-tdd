import axios from 'axios';

const axInstance = axios.create({
    baseURL: 'https://swapi.dev/api'
});

axInstance.interceptors.response.use(
  (response) => response && response.data,
  (error) => {
      if(axios.isCancel(error)) {
         error.isCancelled = true;
      }
      return Promise.reject(error);
  }
);

export default axInstance;
