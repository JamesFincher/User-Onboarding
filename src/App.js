import logo from './logo.svg';
import './App.css';
import ShowForm from './components/ShowForm';
import ShowUsers from './components/ShowUsers';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const initialUsers = [
    { name: 'john', email: 'john@doe.dev', password: '1234' },
  ];

  const initalFormValues = {
    name: '',
    email: '',
    password: '',
    tos: false,
    disabled: true,
  };
  //set state
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initalFormValues);
  const [formErrors, setFormErrors] = useState([]);
  const [disabled, setDisabled] = useState(true);

  return (
    <div className='App'>
      <ShowForm formValues={formValues} setFormValues={setFormValues} />
      <ShowUsers users={users} />
    </div>
  );
}

export default App;
