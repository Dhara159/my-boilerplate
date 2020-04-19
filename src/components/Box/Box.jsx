import React, { useState } from 'react';

import Card from '../Card/Card';
import UserContext from '../../context/UserContext';
import './Box.scss';


const Box = () => {
  const [user, setUser] = useState(null);
  const updateUser = user => setUser(user);
  return (
    <UserContext.Provider value={{
      user,
      updateUser
    }} >
      <Card />
    </UserContext.Provider >);
};

Box.propTypes = {};

Box.defaultProps = {};

export default Box;
