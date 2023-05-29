import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AdminItems, { addOrUpdate } from '../AdminItems';
import ServiceForm from './ServiceForm';
import { addService, deleteService, fetchServiceById, fetchServices, selectService, selectServices, updateService } from '../../reducers/serviceSlice';

const title = 'Услуги';
const itemsSlug = 'service';

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const item = useSelector(selectService);
  const values = useMemo(() => (id ? item : null), [id, item]);

  const updater = addOrUpdate(
    addService,
    updateService,    
  );

  const handleSubmit = useCallback(({
    slug,
    title,
    image,
    text,
    viewed,
  }) => {
    dispatch(updater(id, {
      slug,
      title,
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
      fetchItem={fetchServiceById}
      deleteItem={deleteService}
    >
      <ServiceForm
        item={values}
        link={values && values.slug && `/services/${values.slug}`}
        onSubmit={handleSubmit}
      />
    </AdminItems.Edit>
  );
}
  
function Services() {
  return (
    <AdminItems
      title={title}
      slug={itemsSlug}
      selectItems={selectServices}
      fetchItems={fetchServices}
    />
  );
}

Services.Edit = Edit;

export default Services; 
