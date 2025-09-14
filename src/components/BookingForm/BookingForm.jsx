import styles from './BookingForm.module.css';

import { bookingSchema } from '../../validation/bookingSchema';

import { ErrorMessage, Field, Form, Formik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

export default function BookingForm() {
  const handleSubmit = (values, actions) => {
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={bookingSchema}>
      <Form className={styles.form}>
        <h3 className={styles.title}>Book your car now</h3>
        <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>
        <div className={styles.fieldWrapper}>
          <Field className={styles.field} type="text" name="name" placeholder="Name*" />
          <ErrorMessage name="name" component="span" />
          <Field className={styles.field} type="email" name="email" placeholder="Email*" />
          <ErrorMessage name="email" component="span" />
          <Field className={styles.field} type="text" name="date" placeholder="Booking date" />
          <ErrorMessage name="date" component="span" />
          <Field className={styles.field} as="textarea" name="comment" placeholder="Comment" />
          <ErrorMessage name="comment" component="span" />
        </div>
        <button className={styles.submitBtn} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
}
