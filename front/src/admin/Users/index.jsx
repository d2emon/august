import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, deleteUser, fetchUser, fetchUsers, selectUser, selectUsers, updateUser } from '../../reducers/userSlice';
import AdminItems from '../AdminItems/AdminItems';
import UserForm from './UserForm';

function Edit() {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  const handleLoad = useCallback((id) => {
    dispatch(fetchUser(id));
  }, [
    dispatch,
  ]);

  const handleDelete = useCallback((id) => {
    dispatch(deleteUser(id));
  }, [
    dispatch,
  ]);

  const handleSubmit = useCallback((id, values) => {
    dispatch(
      id
        ? updateUser({
          id,
          values,
        })
        : addUser(values)
    );
  }, [
    dispatch,
  ]);

  return (
    <AdminItems.Edit
      data={user}
      title="Пользователи"
      slug="user"
      onLoad={handleLoad}
      onDelete={handleDelete}
    >
      <UserForm
        values={user}
        onSubmit={handleSubmit}
      />
    </AdminItems.Edit>
  );
}
  
function Users() {
  const dispatch = useDispatch();

  const users = useSelector(selectUsers);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <AdminItems
      items={users}
      title="Пользователи"
      slug="user"
    />
  );
}

Users.Edit = Edit;

export default Users; 
