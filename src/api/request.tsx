/** @format */

import axios from "axios";
import errorHandler from "./errorHandler";

const Request = axios.create();
Request.defaults.baseURL = "https://jsonplaceholder.typicode.com";
Request.defaults.timeout = 200000;
Request.interceptors.request.use(
  async (config: any) => {
    config.headers.Accept = "application/json";
    config.withCredentials = false;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
Request.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error && error.config && error.response && error.config.noToast) {
      return;
    }

    errorHandler(error);
  }
);
export default Request;
