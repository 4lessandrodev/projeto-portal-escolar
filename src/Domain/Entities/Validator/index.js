
const isEmail = require('validator/lib/isEmail');
const isBoolean = require('validator/lib/isBoolean');
const _Error = require('../../../Utils/Errors/createError');
const isDate = require('date-fns/isDate');
const formatDate = require('date-fns/format');

const validateEmail = (email) => {
  if (!isEmail(email)) {
    const error = new _Error('email inválido');
    error.throw();
  }
  return isEmail(email);
};

const validatePassword = (password) => {
  if (password.trim() === '') {
    const error = new _Error('campo senha não deve ser vazio');
    error.throw();
  }
};

const validateBoolean = (value) => {
  if (!isBoolean(value)) {
    const error = new _Error('campo admin deve ser boolean');
    error.throw();
  }
  return isBoolean(value);
};

const validateAdmin = (value) => {
  if (typeof value !== 'string') {
    const error = new _Error('campo admin deve ser string com valor true ou false');
    error.throw();
  }
  validateBoolean(value);
};

const validateDate = (date) => {
  if (!isDate(date)) {
    const error = new _Error('informe uma data válida');
    error.throw();
  }
};

module.exports = {
  validateEmail,
  validatePassword,
  validateBoolean,
  validateAdmin,
  validateDate,
  formatDate
};
