import api from './api';

const prepareSocial = (social) => (social ? {
  id: social.id,
  title: social.title,
  href: social.href,
  social: social.social,
} : null);

const socialApi = {
  getSocials: () => api.get('/social')
    .then(({ data }) => (data.socials ? data.socials.map(prepareSocial) : [])),
  getSocial: (socialId) => api.get(`/social/${socialId}`)
    .then(({ data }) => prepareSocial(data.social)),
  addSocial: (token, values) => api.post('/social', values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  setSocial: (token, socialId, values) => api.put(`/social/${socialId}`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  deleteSocial: (token, socialId) => api.delete(`/social/${socialId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
};

export default socialApi;
