import markdown from '@/helpers/markdown';
import api from './api';

const prepareProject = (project) => (project ? {
  id: project.id,
  slug: project.slug,
  title: project.title,
  client: project.client,
  to: `/project/${project.slug}`,
  image: project.image,
  date: project.date,
  serviceId: project.serviceId,
  text: project.text,
  html: markdown.render(project.text || ''),
} : null);

export default {
  getProjects: () => api.get('/project')
    .then(({ data }) => (data.projects ? data.projects.map(prepareProject) : [])),
  getProject: (projectId) => api.get(`/project/${projectId}`)
    .then(({ data }) => prepareProject(data.project)),
  getProjectById: (projectId) => api.get(`/project/id/${projectId}`)
    .then(({ data }) => prepareProject(data.project)),
  addProject: (token, values) => api.post('/project', values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  setProject: (token, projectId, values) => api.put(`/project/${projectId}`, values, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),
  deleteProject: (token, projectId) => api.delete(`/project/${projectId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }),

  getLatestProjects: () => api.get('/project/latest')
    .then(({ data }) => (data.projects ? data.projects.map(prepareProject) : [])),
  getServiceProjects: (serviceId) => api.get(`/project/service/${serviceId}`)
    .then(({ data }) => (data.projects ? data.projects.map(prepareProject) : [])),
};
