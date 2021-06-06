import axios from 'axios';
import config from '@/helpers/config';

export default axios.create({
  baseURL: config.apiUrl,
});
