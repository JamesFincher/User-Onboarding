import "./App.css";
import ShowForm from "./components/ShowForm";
import ShowUsers from "./components/ShowUsers";
import { useState, useEffect } from "react";
import schema from "./validation/schema";

function App() {
  const initialUsers = [
    {
      name: "John",
      email: "John@doe.dev",
      password: "John123456",
      id: "John12345656",
    },
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
