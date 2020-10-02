
function buildBeans () {
  const beans = {};

  if (process.env.DIALECT === 'mysql') {
    const UserRespository = require('../repositories/mysql/userRepository');
    beans.userRespoitory = new UserRespository();
  } else if (process.env.DIALECT === 'mongo') {
    throw new Error('Dialeto não implementado');
  } else {
    throw new Error('Dialeto não implementado');
  }
  return beans;
}
module.exports = buildBeans();
