import axios from "axios";
axios.defaults.withCredentials = true;

let store;

export const injectStore = (_store) => {
  store = _store;
};

export const BASE_URL = "https://jnb-api.ngrok.io";

const API = axios.create({ baseURL: BASE_URL });

API.interceptors.request.use((req) => {
  // Do something on request
  return req;
});

API.interceptors.response.use((res) => {
  // Do something on response
  return res;
});

export default API;
