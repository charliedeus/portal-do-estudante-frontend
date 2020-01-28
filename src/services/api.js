import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cart-ager-cad.herokuapp.com',
});

export default api;
