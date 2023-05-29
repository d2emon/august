import api from './api';

const prepareUser = (user) => (user ? {
  id: user.id,
  title: user.username,
  username: user.username,
  date: user.date,
} : null);

const userApi = {
  getUsers: () => api.get('/user')
    .then(({ data }) => (data.users ? data.users.map(prepareUser) : [])),
  getUserById: (id) => api.get(`/user/id/${id}`)
    .then(({ data }) => prepareUser(data.user)),
  addUser: (token, values) => api.post('/user', values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  setUser: (token, id, values) => api.put(`/user/${id}`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  deleteUser: (token, id) => api.delete(`/user/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
};

export default userApi;
