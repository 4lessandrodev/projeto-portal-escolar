const bcrypt = require('bcrypt');
const Salt = 10;
const { isHashValue } = require('../validations/validator');
module.exports = (pass) => {
  if (!isHashValue(pass)) {
    return bcrypt.hashSync(pass, Salt);
  }
  return pass;
};
