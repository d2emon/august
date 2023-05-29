import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AdminItems, { addOrUpdate } from '../AdminItems';
import SocialForm from './SocialForm';
import { addSocial, deleteSocial, fetchSocials, selectSocials, updateSocial } from '../../reducers/socialSlice';

const title = 'Социальные сети';
const itemsSlug = 'social';

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const items = useSelector(selectSocials);

  const item = useMemo(() => (
    (id && items)
      ? items.find((item) => (item.id === id))
      : null
  ), [
    id,
    items,
  ]);

  const updater = addOrUpdate(
    addSocial,
    updateSocial,
  );

  const handleSubmit = useCallback(({
    title,
    href,
    social,
  }) => {
    dispatch(updater(id, {
      title,
      href,
      social,
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
      item={item}
      fetchItem={fetchSocials}
      deleteItem={deleteSocial}
    >
      <SocialForm
        item={item}
        onSubmit={handleSubmit}
      />
    </AdminItems.Edit>
  );
}
  
function Socials() {
  return (
    <AdminItems
      title={title}
      slug={itemsSlug}
      selectItems={selectSocials}
      fetchItems={fetchSocials}
    />
  );
}

Socials.Edit = Edit;

export default Socials; 
