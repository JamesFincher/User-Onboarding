import React from 'react';
import { submit } from './FormPost.js';

const ShowForm = (props) => {
  const { formValues, setFormValues, setUsers, users, disabled } = props;
  const { name, email, password, tos } = formValues;

  //make submit handler
  const onSubmit = (e) => {
    e.preventDefault();
    submit(formValues, users, setUsers);
  };

  //make change handeler
  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const valToUse = type === 'checkbox' ? checked : value;
    setFormValues({ ...formValues, [name]: valToUse });
  };

  return (
    <div>
      <h1>ShowForm</h1>
      <form onSubmit={onSubmit}>
        <label>
          Name:
          <input
            type='text'
            name='name'
            placeholder='name'
            onChange={onChange}
            value={name}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type='email'
            name='email'
            placeholder='email'
            onChange={onChange}
            value={email}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            name='password'
            placeholder='password'
            onChange={onChange}
            value={password}
          />
        </label>
        <br />
        <label>
          I agree to the terms of service
          <input type='checkbox' name='tos' onChange={onChange} checked={tos} />
        </label>
        <br />
        <button disabled={disabled}>Submit</button>
      </form>
    </div>
  );
};

export default ShowForm;
