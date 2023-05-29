import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';
import AdminField from '../fields/AdminField';

export const FORM_NAME = 'EMAIL_FORM';

let EmailForm = ({
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
        name="email"
        label="Адрес электронной почты"
        component={AdminField}
      />

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

EmailForm = reduxForm({
  form: FORM_NAME,
  initialValues: {
    email: '',
  },
})(EmailForm);

export default EmailForm;
