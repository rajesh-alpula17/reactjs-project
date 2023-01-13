import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://educourse-flask-api-git-reactjstraining-rajesh-alpula17.vercel.app/",
  //baseURL: "http://localhost:5000/",
});

axiosInstance.interceptors.request.use(
  function (config) {
    // Do something before request is sent    
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);