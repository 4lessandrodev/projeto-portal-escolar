const { v4: uuidv4 } = require('uuid');
module.exports = (id) => {
  if (id) {
    return id;
  }
  return uuidv4();
};
