import React, { useCallback, useEffect, useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

function LoginModal({
  show,
  onSubmit,
}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeUsername = useCallback((event) => setUsername(event.target.value), []);
  const handleChangePassword = useCallback((event) => setPassword(event.target.value), []);

  const handleSubmit = useCallback(() => {
    onSubmit({
      username,
      password,
    })
  }, [
    username,
    password,
    onSubmit,
  ]);

  useEffect(() => {
    setUsername('');
    setPassword('');
  }, []);

  return (
    <Modal
      show={show}
      backdrop="static"
    >
        <Modal.Header>
            <Modal.Title>Администрирование сайта</Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <Form>
                <Form.Group>
                <Form.Label>Имя пользователя</Form.Label>  
                <Form.Control
                    required
                    placeholder="Имя пользователя"
                    value={username}
                    onChange={handleChangeUsername}
                />
                </Form.Group>

                <Form.Group>
                <Form.Label>Пароль</Form.Label>  
                <Form.Control
                    required
                    type="password"
                    placeholder="Пароль"
                    value={password}
                    onChange={handleChangePassword}
                />
                </Form.Group>
            </Form>
        </Modal.Body>

        <Modal.Footer>
            <Button
                variant="success"
                onClick={handleSubmit}
            >
                Войти
            </Button>
        </Modal.Footer>
    </Modal>
  );
}

export default LoginModal; 
