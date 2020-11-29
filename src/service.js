import Axios from 'axios';

const service = Axios.create({
  baseURL: 'http://192.168.42.22:3000/api/',
});

export default service;
