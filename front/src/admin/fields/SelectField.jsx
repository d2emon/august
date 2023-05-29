import React, { useCallback } from 'react';
import { Form } from 'react-bootstrap';

function SelectField ({
  label,
  options,
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
        as="select"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        { options.map((option) => (
          <option
            key={option.id}
            value={option.id}
          >
            { option.title }
          </option>
        )) }
      </Form.Control>
    </Form.Group>
  );
}

export default SelectField;
