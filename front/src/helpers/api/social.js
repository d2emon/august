import api from './api';

const prepareSocial = (social) => (social ? {
  id: social.id,
  title: social.title,
  href: social.href,
} : null);

export default {
  getSocials: () => api.get('/social')
    .then(({ data }) => (data.socials ? data.socials.map(prepareSocial) : [])),
  getSocial: (socialId) => api.get(`/social/${socialId}`)
    .then(({ data }) => prepareSocial(data.social)),
  addSocial: (values) => api.post('/social', values),
  setSocial: (socialId, values) => api.put(`/social/${socialId}`, values),
  deleteSocial: (socialId) => api.delete(`/social/${socialId}`),
};
