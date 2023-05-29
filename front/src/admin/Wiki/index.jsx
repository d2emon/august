import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AdminItems, { addOrUpdate } from '../AdminItems';
import WikiForm from './WikiForm';
import { addPage, deletePage, fetchPageById, fetchPages, selectPage, selectPages, updatePage } from '../../reducers/pageSlice';

const title = 'Страницы';
const itemsSlug = 'wiki';

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const item = useSelector(selectPage);
  const values = useMemo(() => (id ? item : null), [id, item]);

  const updater = addOrUpdate(
    addPage,
    updatePage,    
  );

  const handleSubmit = useCallback(({
    slug,
    title,
    date,
    categories,
    text,
    viewed,
  }) => {
    dispatch(updater(id, {
      slug,
      title,
      date,
      categories,
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
      selectItems={selectPages}
      fetchItem={fetchPageById}
      deleteItem={deletePage}
    >
      <WikiForm
        item={values}
        link={values && values.slug && `/about/${values.slug}`}
        onSubmit={handleSubmit}
      />
    </AdminItems.Edit>
  );
}
  
function Wiki() {
  return (
    <AdminItems
      title={title}
      slug={itemsSlug}
      selectItems={selectPages}
      fetchItems={fetchPages}
    />
  );
}

Wiki.Edit = Edit;

export default Wiki; 
