import React from 'react';

const ShowForm = (props) => {
  const { formValues, setFormValues } = props;
  const { name, email, password, tos, disabled } = formValues;

  //make change handeler
  const onChange = (e) => {
    const { name, value, checked, type } = e.target;
    const valToUse = type === 'checkbox' ? checked : value;
    setFormValues({ ...formValues, [name]: valToUse });
  };

  return (
    <div>
      <h1>ShowForm</h1>
      <form>
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
