import React from 'react';

const ShowUsers = (props) => {
  const { users } = props;
  return (
    <div>
      <h1>ShowUsers</h1>
      <ol>
        {users.map((user) => (
          <li>
            Name: {user.name}, Email: {user.email}, Password:
            {user.password ? user.password : 'No password'}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ShowUsers;
