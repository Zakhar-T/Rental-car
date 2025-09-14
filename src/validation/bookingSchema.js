import * as Yup from 'yup';

export const bookingSchema = Yup.object().shape({
  name: Yup.string().min(4, 'Name is too short').max(30, 'Name is too long').required('Name is required'),
  email: Yup.string().email('Email must be valid').required('Email is required'),
  date: Yup.string()
    .min(new Date(), 'Date must be in the future')
    .matches(/^(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\.(\d{4})$/, 'Date must be in format dd.mm.yyyy'),
  comment: Yup.string().max(300, 'Comment is too long'),
});
