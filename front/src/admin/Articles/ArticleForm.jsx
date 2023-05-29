import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import AdminField from '../fields/AdminField';
import ImageField from '../fields/ImageField';
import MarkdownPreview from '../fields/MarkdownPreview';
import MultipleSelectField from '../fields/MultipleSelectField';

export const FORM_NAME = 'ARTICLE_FORM';

let ArticleForm = ({
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
        name="categories"
        label="Категории"
        options={categories}
        component={MultipleSelectField}
      />

      <Field
        name="viewed"
        label="Просмотров"
        readOnly
        component={AdminField}
      />

      <Field
        name="date"
        label="Дата"
        type="date"
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

ArticleForm = reduxForm({
  form: FORM_NAME,
  initialValues: {
    slug: '',
    title: '',
    viewed: 0,
    categories: [],
    image: '',    
    text: '',
  },
})(ArticleForm);

export default ArticleForm;
