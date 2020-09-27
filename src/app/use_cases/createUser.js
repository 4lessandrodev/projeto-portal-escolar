'use strict';

const User = require('../../domain/models/User/User');

module.exports = (email, password, userRepository) => {
  const user = new User(null, email, password);
  return userRepository.persist(user);
};
