import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AdminItems, { addOrUpdate } from '../AdminItems';
import ProjectForm from './ProjectForm';
import { fetchServices, selectServices } from '../../reducers/serviceSlice';
import { addProject, deleteProject, fetchProjectById, fetchProjects, selectProject, selectProjects, updateProject } from '../../reducers/projectSlice';

const title = 'Проекты';
const itemsSlug = 'project';

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const services = useSelector(selectServices);

  const item = useSelector(selectProject);
  const values = useMemo(() => (id ? item : null), [id, item]);

  const updater = addOrUpdate(
    addProject,
    updateProject,    
  );

  const handleLoad = useCallback(() => {
    dispatch(fetchServices());
  }, [dispatch]);

  const handleSubmit = useCallback(({
    slug,
    title,
    date,
    service,
    client,
    image,
    text,
    viewed,
  }) => {
    dispatch(updater(id, {
      slug,
      title,
      date,
      service,
      client,
      image,
      text,
      viewed,
    }));
    navigate(`/admin/${itemsSlug}`);
  }, [
    dispatch,
    navigate,
    id,
    updater,
  ]);

  return (
    <AdminItems.Edit
      title={title}
      slug={itemsSlug}
      item={values}
      fetchItem={fetchProjectById}
      deleteItem={deleteProject}
      onLoad={handleLoad}
    >
      <ProjectForm
        item={values}
        services={services}
        link={values && values.slug && `/projects/${values.slug}`}
        onSubmit={handleSubmit}
      />
    </AdminItems.Edit>
  );
}
  
function Projects() {
  return (
    <AdminItems
      title={title}
      slug={itemsSlug}
      selectItems={selectProjects}
      fetchItems={fetchProjects}
    />
  );
}

Projects.Edit = Edit;

export default Projects; 
