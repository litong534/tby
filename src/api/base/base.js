import axios from 'axios';
import { BASE_URL } from '@/common/config/index.js';
const base = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});

export default base;