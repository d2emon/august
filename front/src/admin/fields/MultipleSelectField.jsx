import React, { useCallback } from 'react';
import { Form } from 'react-bootstrap';

function MultipleSelectField ({
  label,
  options,
  input: {
    name,
    value,
    onChange,
  },
}) {
  const handleChange = useCallback((event) => {
    onChange([].slice.call(event.target.selectedOptions).map(item => item.value));
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
        multiple
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

export default MultipleSelectField;
