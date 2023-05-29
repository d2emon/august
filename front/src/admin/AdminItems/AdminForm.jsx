import React, { useCallback, useEffect, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import dateFormatter from '../../helpers/dateFormatter';

function AdminForm({
  values,
  onSubmit,
}) {
  /*
  const dispatch = useDispatch();

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

  const handleSubmit = useCallback((id, values) => {
    dispatch(
      id
        ? updateItem({
          id,
          values,
        })
        : addItem(values)
    );
  }, [
    dispatch,
  ]);
  */
  const navigate = useNavigate();

  const [id, setId] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [date, setDate] = useState(new Date());
  
  const handleChangeUsername = useCallback((event) => setUsername(event.target.value), []);
  const handleChangePassword = useCallback((event) => setPassword(event.target.value), []);
  
  const handleSubmit = useCallback(() => {
    const newValues = {
      username,
    };
    if (password) {
      newValues.password = password;
    }
    onSubmit(id, newValues);
    navigate('/admin/user');
  }, [
    navigate,
    id,
    username,
    password,
    onSubmit,
  ]);

  useEffect(() => {
    if (!values) {
      setId(null);
      setUsername('');
      setDate(new Date());  
      return;
    }

    setId(values.id || null);
    setUsername(values.username || '');
    setDate(values.date || new Date());  
  }, [values]);

  return (
    <Container>
      <Form>
        <Form.Group>
          <Form.Label>Имя пользователя</Form.Label>  
          <Form.Control
            placeholder="Имя пользователя"
            value={username}
            onChange={handleChangeUsername}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Пароль</Form.Label>  
          <Form.Control
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={handleChangePassword}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Дата регистрации</Form.Label>  
          <Form.Control
            placeholder="Дата регистрации"
            value={dateFormatter(date)}
            readOnly
          />
        </Form.Group>
      </Form>

      <Container className="my-2">
        <Button
          variant="success"
          onClick={handleSubmit}
        >
          Сохранить
        </Button>
      </Container>
    </Container>
  );
}

export default AdminForm;
