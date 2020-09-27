const { validateEmail, validatePass } = require('../../validations/validator');
const EncryptPass = require('../../utils/EncryptPass');
const GenerateId = require('../../../infra/utils/serealize');
module.exports = class User {
  constructor (email, password, id) {
    this._id = GenerateId(id);
    this._email = email;
    this._password = EncryptPass(password);
    this.validateUser();
  }

  get id () {
    return this._id;
  }

  set id (value = Math.random()) {
    this._id = GenerateId(value);
  }

  get email () {
    return this._email;
  }

  set email (value) {
    validateEmail(value);
    this._email = value;
  }

  get password () {
    return this._password;
  }

  set password (value) {
    validatePass(value);
    this._password = EncryptPass(value);
  }

  validateUser () {
    validateEmail(this._email);
    validatePass(this._password);
  }

  static create (id, email, password) {
    const user = new User(id, email, password);
    return Object.freeze(user);
  }
};
