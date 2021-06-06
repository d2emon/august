import markdown from '@/helpers/markdown';
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

export default {
  getServices: () => api.get('/service')
    .then(({ data }) => (data.services ? data.services.map(prepareService) : [])),
  getService: (serviceId) => api.get(`/service/${serviceId}`)
    .then(({ data }) => prepareService(data.service)),
  getServiceById: (serviceId) => api.get(`/service/id/${serviceId}`)
    .then(({ data }) => prepareService(data.service)),
  addService: (values) => api.post('/service', values),
  setService: (serviceId, values) => api.put(`/service/${serviceId}`, values),
  deleteService: (serviceId) => api.delete(`/service/${serviceId}`),
};
