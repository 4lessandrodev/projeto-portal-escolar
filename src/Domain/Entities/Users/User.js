const {
  validateEmail,
  validatePassword,
  validateAdmin,
  validateDate,
  formatDate
} = require('../Validator/index');
const generateNewId = require('../../../Utils/GenerateId/index');

class User {
  constructor (email, password, admin, createdAt, updatedAt, id) {
    this.id = null;
    this.email = email;
    this.password = password;
    this.admin = admin;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.validateUser();
    this.generateId(id);
  }

  validateUser () {
    validateEmail(this.email);
    validatePassword(this.password);
    validateAdmin(this.admin);
    validateDate(this.createdAt);
    validateDate(this.updatedAt);
    this.formatDate();
  }

  formatDate () {
    formatDate(this.createdAt, 'MM/dd/yyyy');
    formatDate(this.updatedAt, 'MM/dd/yyyy');
  }

  generateId (id) {
    this.id = generateNewId(id);
  }
};

module.exports = User;
