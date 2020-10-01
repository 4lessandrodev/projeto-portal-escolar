const { v4: uuidv4 } = require('uuid');

module.exports = (value) => {
  if (value === null) {
    return uuidv4(value);
  }
  return value;
};
