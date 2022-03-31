import axios from 'axios';
import React from 'react';
const submit = (formValues, users, Setusers) => {
  const { name, email, password } = formValues;
  const newUser = {
    name: name,
    email: email,
    password: password,
  };

  axios
    .post('https://reqres.in/api/users', newUser)
    .then((res) => Setusers([...users, res.data]))
    .catch((err) => console.error(err));
};

const FormPost = () => {
  return (
    <div>
      <h1>FormPost</h1>
    </div>
  );
};

export { submit, FormPost };
