import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import AdminField from '../fields/AdminField';

export const FORM_NAME = 'SOCIAL_FORM';

let SocialForm = ({
  item,
  handleSubmit,
  initialize,
  initialValues,
  onSubmit,
}) => {
  useEffect(() => {
    const toUpdate = item || {};
    initialize({
      ...initialValues,
      ...toUpdate,
    });
  }, [
    item,
    initialize,
    initialValues,
  ]);

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field
        name="title"
        label="Название"
        component={AdminField}
      />

      <Field
        name="href"
        label="Ссылка"
        component={AdminField}
      />

      <Field
        name="social"
        label="Социальная сеть"
        component={AdminField}
      />

      {item && item.href && <Form.Group>
        <Button
          variant="link"
          href={item.href}
        >
          Перейти
        </Button>
      </Form.Group>}

      <Form.Group>
        <Button
          className="my-2"
          variant="success"
          type="submit"          
        >
          Сохранить
        </Button>
      </Form.Group>
    </Form>
  );
}

SocialForm = reduxForm({
  form: FORM_NAME,
  initialValues: {
    title: '',
    href: '',
    social: '',
  },
})(SocialForm);

export default SocialForm;
