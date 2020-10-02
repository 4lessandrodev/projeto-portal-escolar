const sequelize = require('sequelize');
const UserRepository = require('../../../domain/repositories/userRepository');

module.exports = class extends UserRepository {
  constructor () {
    super();
    this.db = sequelize;
    this.model = this.db.model('User');
  }

  async persist (userEntity) {
    const user = await this.model.create(userEntity);
    await user.save();
    return user;
  }

  async findAll () {
    throw new Error('Método não implementado');
  }
};
