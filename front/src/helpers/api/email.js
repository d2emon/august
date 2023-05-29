import api from './api';

const prepareEmail = (email) => (email ? {
  id: email.id,
  title: email.email,
  email: email.email,
} : null);

const emailApi = {
  getEmails: () => api.get('/email')
    .then(({ data }) => (data.emails ? data.emails.map(prepareEmail) : [])),
  getEmailById: (id) => api.get(`/email/id/${id}`)
    .then(({ data }) => prepareEmail(data.email)),
  addEmail: (values) => api.post('/email', values),
  setEmail: (token, id, values) => api.put(`/email/${id}`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  deleteEmail: (token, id) => api.delete(`/email/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
};

export default emailApi;
