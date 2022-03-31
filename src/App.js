import logo from './logo.svg';
import './App.css';
import ShowForm from './components/ShowForm';
import ShowUsers from './components/ShowUsers';
import { useState, useEffect } from 'react';
import axios from 'axios';
import schema from './validation/schema';
import * as yup from 'yup';

function App() {
  const initialUsers = [
    { name: 'john', email: 'john@doe.dev', password: '1234', id: '123456' },
  ];

  const initalFormValues = {
    name: '',
    email: '',
    password: '',
    tos: false,
    disabled: false,
  };
  //set state
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initalFormValues);
  const [formErrors, setFormErrors] = useState([]);
  const [disabled, setDisabled] = useState(initalFormValues.disabled);
  useEffect(() => {
    // 🔥 STEP 9- ADJUST THE STATUS OF `disabled` EVERY TIME `formValues` CHANGES
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  const validate = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };
  return (
    <div className='App'>
      <ShowForm
        formValues={formValues}
        setFormValues={setFormValues}
        disabled={disabled}
        setUsers={setUsers}
        users={users}
      />
      <ShowUsers users={users} />
    </div>
  );
}

export default App;
