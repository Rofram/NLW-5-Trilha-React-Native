import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.0.2.2:3333', // for android emulator in localhost: 'http://10.0.2.2:3333'
});

export default api;