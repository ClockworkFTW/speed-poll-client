import axios from "axios";
axios.defaults.withCredentials = true;

let store;

export const injectStore = (_store) => {
  store = _store;
};

export const BASE_URL = process.env.REACT_APP_BASE_URL;

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  // Do something on request
  // console.log(store);
  return req;
});

API.interceptors.response.use((res) => {
  // Do something on response
  // console.log(store);
  return res;
});

export default API;
