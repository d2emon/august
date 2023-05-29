import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import AdminItems, { addOrUpdate } from '../AdminItems';
import EmailForm from './EmailForm';
import { addEmail, deleteEmail, fetchEmail, fetchEmails, selectEmail, selectEmails, updateEmail } from '../../reducers/emailSlice';

const title = 'Рассылка';
const itemsSlug = 'email';

function Edit() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = useParams();

  const item = useSelector(selectEmail);
  const values = useMemo(() => (id ? item : null), [id, item]);

  const updater = addOrUpdate(
    addEmail,
    updateEmail,    
  );

  const handleSubmit = useCallback(({
    email,
  }) => {
    dispatch(updater(id, {
      email,
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
      fetchItem={fetchEmail}
      deleteItem={deleteEmail}
    >
      <EmailForm
        item={values}
        onSubmit={handleSubmit}
      />
    </AdminItems.Edit>
  );
}
  
function Emails() {
  return (
    <AdminItems
      title={title}
      slug={itemsSlug}
      selectItems={selectEmails}
      fetchItems={fetchEmails}
    />
  );
}

Emails.Edit = Edit;

export default Emails; 
