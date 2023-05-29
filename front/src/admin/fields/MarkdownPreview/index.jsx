import React, { useCallback, useMemo } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import markdown from '../../../helpers/markdown';

import './MarkdownPreview.css';

function MarkdownPreview({
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

  const html = useMemo(() => markdown.render(value || ''), [value]);

  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Row>
        <Col>
          <Form.Control
            as="textarea"
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
          <div
            className="markdown-preview"
            dangerouslySetInnerHTML={{
              __html: html,
            }}
          />
        </Col>
      </Row>
    </Form.Group>
  );
}

export default MarkdownPreview;
