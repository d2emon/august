import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import AdminField from '../fields/AdminField';
import ImageField from '../fields/ImageField';
import MarkdownPreview from '../fields/MarkdownPreview';

export const FORM_NAME = 'SERVICE_FORM';

let ServiceForm = ({
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
        label="Заголовок"
        component={AdminField}
      />

      <Field
        name="image"
        label="Изображение"
        component={ImageField}
      />

      <Field
        name="text"
        label="Статья"
        component={MarkdownPreview}
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

ServiceForm = reduxForm({
  form: FORM_NAME,
  initialValues: {
    slug: '',
    title: '',
    image: '',
    text: '',
  },
})(ServiceForm);

export default ServiceForm;
