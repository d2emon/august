export const prepareProject = (project) => (project ? {
  id: project.id,
  title: project.title,
  client: project.client,
  to: `/project/${project.id}`,
  image: project.image,
} : null);

export default {};
