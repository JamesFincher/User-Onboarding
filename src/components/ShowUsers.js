import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const ShowUsers = (props) => {
  const { users } = props;
  return (
    <div>
      <h1>ShowUsers</h1>
      <ol>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name}, Email: {user.email}, Password:
            {user.password ? user.password : 'No password'}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default ShowUsers;
