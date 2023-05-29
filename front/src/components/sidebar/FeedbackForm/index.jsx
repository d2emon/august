import React from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import './FeedbackForm.css';

function FeedbackForm({ onSubmit }) {
  const [email, setEmail] = useState('');

  const handleChange = useCallback((event) => {
    setEmail(event.target.value);
  }, [])

  const handleSubmit = useCallback(() => {
    onSubmit(email);
    setEmail('');
  }, [email, setEmail, onSubmit]);

  return (
    <div className="v-card">
      <div className="v-card__title">Подписка на рассылку</div>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Введите адрес электронной почты</Form.Label>
            <Form.Control
              type="email"
              placeholder="Введите адрес электронной почты"
              value={email}
              onChange={handleChange}
            />
          </Form.Group>
        </Form>

        <button
            id="submit"
            className="v-btn"
            disabled={!email}
            onClick={handleSubmit}
          >
            Подписаться
          </button>
      </Container>
    </div>
  );
}

export default FeedbackForm; 
