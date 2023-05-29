import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import AdminItems from './AdminItems';

export const addOrUpdate = (addItem, updateItem) => (id, values) => (
  id
    ? updateItem({ id, values })
    : addItem(values)
);

function Edit({
  title,
  slug,
  item,
  fetchItem,
  deleteItem,
  onLoad,
  children,
}) {
  const dispatch = useDispatch();

  const handleLoad = useCallback((id) => {
    dispatch(fetchItem(id));
    if (onLoad) {
      onLoad();
    }
  }, [
    dispatch,
    fetchItem,
    onLoad,
  ]);

  const handleDelete = useCallback((id) => {
    dispatch(deleteItem(id));
  }, [
    dispatch,
    deleteItem,
  ]);

  return (
    <AdminItems.Edit
      item={item}
      title={title}
      slug={slug}
      onLoad={handleLoad}
      onDelete={handleDelete}
    >
      { children }
    </AdminItems.Edit>
  );
}
  
function Items({
  title,
  slug,
  selectItems,
  fetchItems,
}) {
  const dispatch = useDispatch();

  const items = useSelector(selectItems);

  useEffect(() => {
    dispatch(fetchItems());
  }, [
    dispatch,
    fetchItems,
  ]);

  return (
    <AdminItems
      items={items}
      title={title}
      slug={slug}
    />
  );
}

Items.Edit = Edit;

export default Items; 
