import React from 'react';

const ShowForm = () => {
  return (
    <div>
      <h1>ShowForm</h1>
      <form>
        <label>
          Name:
          <input type='text' name='name' placeholder='name' value='' />
        </label>
        <br />
        <label>
          Email:
          <input type='email' name='email' placeholder='email' value='' />
        </label>
        <br />
        <label>
          Password:
          <input
            type='password'
            name='password'
            placeholder='password'
            value=''
          />
        </label>
        <br />
        <label>
          <input type='checkbox' name='tos' value='' />I agree to the terms of
          service
        </label>
        <br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default ShowForm;
