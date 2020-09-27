const { isEmail } = require('validator');
const Erro = require('./Error');

const validateEmail = (value) => {
  if (!isEmail(value)) { Erro.create('Email inválido'); }
};

const validatePass = (pass) => {
  if (pass.trim() === '') {
    Erro.create('Senha é campo obrigatório');
  } else if (pass.length <= 5) {
    Erro.create('Senha deve conter mais de 5 caracteres');
  }
};

module.exports = { validateEmail, validatePass };
