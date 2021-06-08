import api from './api';
import config from '../config';

export default {
  getToken: (username, password) => {
    const data = new URLSearchParams();
    data.append('grant_type', 'password');
    data.append('username', username);
    data.append('password', password);

    return api.post(
      '/auth/token',
      data,
      {
        auth: config.auth,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      },
    )
      .then((response) => (response.data));
  },
};
