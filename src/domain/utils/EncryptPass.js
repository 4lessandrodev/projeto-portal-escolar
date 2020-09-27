const bcrypt = require('bcrypt');
const Salt = 10;
module.exports = (pass) => bcrypt.hashSync(pass, Salt);
