import * as yup from 'yup';

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim('You must enter your name.')
    .min(2, 'Name must be at least 2 characters.'),
  email: yup
    .string()
    .email('Must be a valid email address.')
    .required('You must enter an email address.'),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters.')
    .required('You must enter a password.'),
  tos: yup
    .boolean()
    .test(
      'is-true',
      'You must agree to the terms of service.',
      (value) => value === true
    )
    .required('You must agree to the terms of service.'),
});

export default formSchema;
