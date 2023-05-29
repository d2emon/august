import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import AdminField from '../fields/AdminField';
import MarkdownPreview from '../fields/MarkdownPreview';

export const FORM_NAME = 'WIKI_FORM';

let WikiForm = ({
  item,
  link,
  handleSubmit,
  initialize,
  initialValues,
  categories,
  onSubmit,
}) => {
  useEffect(() => {
    const toUpdate = item || {};
    let date = new Date(toUpdate.date);
    if (isNaN(date)) {
      date = new Date();
    }
    initialize({
      ...initialValues,
      ...toUpdate,
      date: date.toISOString().substring(0, 10),
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

WikiForm = reduxForm({
  form: FORM_NAME,
  initialValues: {
    slug: '',
    title: '',
    image: '',    
    text: '',
  },
})(WikiForm);

export default WikiForm;
