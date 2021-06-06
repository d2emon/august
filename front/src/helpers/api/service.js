import markdown from '@/helpers/markdown';
import api from './api';
import { prepareProject } from './project';

const prepareService = (service) => (service ? {
  id: service.id,
  title: service.title,
  to: `/services/${service.id}`,
  toPortfolio: `/portfolio/service/${service.id}`,
  image: service.image,
  projects: service.projects ? service.projects.map(prepareProject) : [],
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
