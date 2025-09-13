import styles from './BookingForm.module.css';

import { Field, Form, Formik } from 'formik';

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

export default function BookingForm() {
  const handleSubmit = () => {};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <h3 className={styles.title}>Book your car now</h3>
        <p className={styles.subtitle}>Stay connected! We are always ready to help you.</p>
        <div className={styles.fieldWrapper}>
          <Field className={styles.field} type="text" name="name" placeholder="Name*" />
          <Field className={styles.field} type="email" name="email" placeholder="Email*" />
          <Field className={styles.field} type="date" name="date" placeholder="Booking date" />
          <Field className={styles.field} as="textarea" name="comment" placeholder="Comment" />
        </div>
        <button className={styles.submitBtn} type="submit">
          Send
        </button>
      </Form>
    </Formik>
  );
}
