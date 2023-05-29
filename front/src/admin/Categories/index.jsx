import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AdminItems, { addOrUpdate } from '../AdminItems';
import CategoryForm from './CategoryForm';
import { addCategory, deleteCategory, fetchCategories, selectCategories, updateCategory } from '../../reducers/categorySlice';

const title = 'Категории статей';
const itemsSlug = 'category';

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const items = useSelector(selectCategories);

  const item = useMemo(() => (
    (id && items)
      ? items.find((item) => (item.id === id))
      : null
  ), [
    id,
    items,
  ]);

  const updater = addOrUpdate(
    addCategory,
    updateCategory,    
  );

  const handleSubmit = useCallback(({
    slug,
    title,
  }) => {
    dispatch(updater(id, {
      slug,
      title,
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
      fetchItem={fetchCategories}
      deleteItem={deleteCategory}
    >
      <CategoryForm
        item={item}
        link={item && item.slug && `/blog/categories/${item.slug}`}
        onSubmit={handleSubmit}
      />
    </AdminItems.Edit>
  );
}
  
function Categories() {
  return (
    <AdminItems
      title={title}
      slug={itemsSlug}
      selectItems={selectCategories}
      fetchItems={fetchCategories}
    />
  );
}

Categories.Edit = Edit;

export default Categories; 
