import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AdminItems, { addOrUpdate } from '../AdminItems';
import ArticleForm from './ArticleForm';
import { fetchCategories, selectCategories } from '../../reducers/categorySlice';
import { addArticle, deleteArticle, fetchArticleById, fetchArticles, selectArticle, selectArticles, updateArticle } from '../../reducers/articleSlice';

const title = 'Статьи';
const itemsSlug = 'article';

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const categories = useSelector(selectCategories);

  const item = useSelector(selectArticle);
  const values = useMemo(() => (id ? item : null), [id, item]);

  const updater = addOrUpdate(
    addArticle,
    updateArticle,    
  );

  const handleLoad = useCallback(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

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
      fetchItem={fetchArticleById}
      deleteItem={deleteArticle}
      onLoad={handleLoad}
    >
      <ArticleForm
        item={values}
        categories={categories}
        link={values && values.slug && `/blog/articles/${values.slug}`}
        onSubmit={handleSubmit}
      />
    </AdminItems.Edit>
  );
}
  
function Articles() {
  return (
    <AdminItems
      title={title}
      slug={itemsSlug}
      selectItems={selectArticles}
      fetchItems={fetchArticles}
    />
  );
}

Articles.Edit = Edit;

export default Articles; 
