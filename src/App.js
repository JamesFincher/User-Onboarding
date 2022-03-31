import "./App.css";
import ShowForm from "./components/ShowForm";
import ShowUsers from "./components/ShowUsers";
import { useState, useEffect } from "react";
import schema from "./validation/schema";

function App() {
  const initialUsers = [
    { name: "john", email: "john@doe.dev", password: "1234", id: "123456" },
  ];

  const initalFormValues = {
    name: "",
    email: "",
    password: "",
    tos: false,
    disabled: false,
  };
  //set state
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initalFormValues);
  const [formErrors, setFormErrors] = useState([]);
  const [disabled, setDisabled] = useState(initalFormValues.disabled);
  useEffect(() => {
    setUsers(users);
  }, []);
  useEffect(() => {
    schema.isValid(formValues).then((valid) => setDisabled(!valid));
  }, [formValues]);

  return (
    <div className="App">
      <ShowForm
        formValues={formValues}
        setFormValues={setFormValues}
        initialFormValues={initalFormValues}
        disabled={disabled}
        setUsers={setUsers}
        users={users}
        setFormErrors={setFormErrors}
        formErrors={formErrors}
      />
      <ShowUsers users={users} />
    </div>
  );
}

export default App;
