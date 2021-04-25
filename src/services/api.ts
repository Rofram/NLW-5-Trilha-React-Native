import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.21.191.42:3333',
});

export default api;