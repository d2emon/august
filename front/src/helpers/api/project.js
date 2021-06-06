import markdown from '@/helpers/markdown';
import api from './api';

export const prepareProject = (project) => (project ? {
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
  addProject: (values) => api.post('/project', values),
  setProject: (projectId, values) => api.put(`/project/${projectId}`, values),
  deleteProject: (projectId) => api.delete(`/project/${projectId}`),

  getLatestProjects: () => api.get('/project/latest')
    .then(({ data }) => (data.projects ? data.projects.map(prepareProject) : [])),
};
