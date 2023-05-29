import markdown from '../markdown';
import api from './api';

const prepareService = (service) => (service ? {
  id: service.id,
  slug: service.slug,
  title: service.title,
  to: `/services/${service.slug}`,
  toPortfolio: `/portfolio/service/${service.slug}`,
  image: service.image,
  text: service.text,
  html: markdown.render(service.text || ''),
} : null);

const serviceApi = {
  getServices: () => api.get('/service')
    .then(({ data }) => (data.services ? data.services.map(prepareService) : [])),
  getService: (serviceId) => api.get(`/service/${serviceId}`)
    .then(({ data }) => prepareService(data.service)),
  getServiceById: (serviceId) => api.get(`/service/id/${serviceId}`)
    .then(({ data }) => prepareService(data.service)),
  addService: (token, values) => api.post('/service', values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  setService: (token, serviceId, values) => api.put(`/service/${serviceId}`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  deleteService: (token, serviceId) => api.delete(`/service/${serviceId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
};

export default serviceApi;
