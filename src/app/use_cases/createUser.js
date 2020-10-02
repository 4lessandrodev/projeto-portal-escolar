'use strict';

const User = require('../../domain/entities/User/User');

module.exports = (email, password, { userRepository }) => {
  const user = new User(email, password);
  return userRepository.persist(user);
};
