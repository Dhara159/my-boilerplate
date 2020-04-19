import React, { useState, useEffect, useContext } from 'react';

import UserContext from '../../context/UserContext';
import './Card.scss';

const Card = () => {
  const [searchQuery, setSearchQuery] = useState('Bret');
  const { updateUser, user } = useContext(UserContext);
  useEffect(() => {
    const fetchFunc = async () => {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`);
      const resJson = await response.json();
      updateUser(resJson[0]);
    };
    fetchFunc();
  }, [searchQuery, updateUser]);

  return (
    <div className='Card'>
      <input
        type='search'
        value={searchQuery}
        onChange={event => setSearchQuery(event.target.value)}
      />
      {user ? (
        <div>
          <h3>{user.name}</h3>
          <h3> {user.username} </h3>
          <h3> {user.email} </h3>
        </div>
      ) : (
          <p>No user found</p>
        )}
    </div>
  );
};

export default Card;