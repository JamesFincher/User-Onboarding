import React from "react";

const ShowUsers = (props) => {
  const { users } = props;
  return (
    <div>
      <h1>ShowUsers</h1>

      {users.map((user) => (
        <p key={user.id}>
          Name: {user.name}, Email: {user.email}, Password:
          {user.password ? user.password : "No password"}
        </p>
      ))}
    </div>
  );
};

export default ShowUsers;
