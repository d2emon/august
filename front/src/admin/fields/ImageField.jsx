import React, { useCallback } from 'react';
import { Col, Form, Row } from 'react-bootstrap';

function ImageField({
  label,
  readOnly=false,
  type='text',
  input: {
    name,
    value,
    onChange,
  },
}) {
  const handleChange = useCallback((event) => {
    onChange(event.target.value);
  }, [onChange]);

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Row>
        <Col>
          <Form.Control
            id={name}
            name={name}
            placeholder={label}
            readOnly={readOnly}
            type={type}
            value={value}
            onChange={handleChange}
          />
        </Col>
        <Col>
          {value && <img
            alt={label}
            src={value}
          />}
        </Col>
      </Row>
    </Form.Group>
  );
}

export default ImageField;
