import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import AdminField from '../fields/AdminField';

export const FORM_NAME = 'CATEGORY_FORM';

let CategoryForm = ({
  item,
  link,
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
        name="slug"
        label="Ссылка"
        component={AdminField}
      />

      <Field
        name="title"
        label="Название"
        component={AdminField}
      />

      {link && <Form.Group>
        <Button
          variant="link"
          href={link}
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

CategoryForm = reduxForm({
  form: FORM_NAME,
  initialValues: {
    slug: '',
    title: '',
  },
})(CategoryForm);

export default CategoryForm;
