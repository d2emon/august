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
      .then((response) => (response.data))
      .catch(() => null);
  },
  checkUser: (token) => api.get('/auth/check', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then(({ data }) => (data.user))
    .catch((e) => {
      if (e.response && (e.response.status === 401)) {
        return null;
      }
      throw new Error(e);
    }),
};
