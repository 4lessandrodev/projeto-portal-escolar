const User = require('./User');

describe('User Model', () => {
  test('Deve retornar uma instância da classe usuário', () => {
    const user = new User('valid_mail@mail.com', '123456', '12');
    expect(user).toBeInstanceOf(User);
  });
  test('Deve atribuir o email válido', () => {
    let user;
    function createUser () {
      user = new User('one_valid_email@gmail.com', '123456');
      user.email = 'valid_email@gmail.com';
      return user.email;
    }
    expect(createUser).not.toThrow('Email inválido');
    expect(user.email).toBe('valid_email@gmail.com');
  });
  test('Deve retornar um erro se o email for inválido', () => {
    function createUser () {
      const user = new User('invalid_mail', '123456');
      user.email = 'invalid_email';
    }
    expect(createUser).toThrow('Email inválido');
  });
  test('Deve criar um usuario e bloquear para alterações', () => {
    function createUser () {
      const user = User.create('valid_mail@mail.com', '123456');
      user.email = 'invalid_mail@mail.com';
    }
    expect(createUser).toThrow('Cannot assign to read only property \'_email\' of object \'#<User>\'');
  });
});
