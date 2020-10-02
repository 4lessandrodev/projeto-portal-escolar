const sequelize = require('sequelize');
const UserRepository = require('../../../domain/repositories/userRepository');
const User = require('../../../domain/models/User/User');
module.exports = class extends UserRepository {
  constructor () {
    super();
    this.db = sequelize;
    this.model = this.db.model('User');
  }

  async persist (userEntity) {
    const { email, password } = userEntity;
    const user = new User(email, password);
    const result = await this.model.create(user);
    await result.save();
    return user;
  }

  async findAll () {
    throw new Error('Método não implementado');
  }
};
