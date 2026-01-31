import axios from 'axios';

const axiosClient = axios.create({
  baseURL: 'http://localhost', // Đường dẫn đến server Docker PHP của bạn
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;