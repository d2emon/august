import React, { useCallback } from 'react';
import { Form } from 'react-bootstrap';

function AdminField({
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
      <Form.Control
        id={name}
        name={name}
        placeholder={label}
        readOnly={readOnly}
        type={type}
        value={value}
        onChange={handleChange}
      />
    </Form.Group>
  );
}

export default AdminField;
