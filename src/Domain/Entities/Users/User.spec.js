const User = require('./User');

describe('Class User', () => {
  const makeUser = (email, pass = '123', admin = 'false', createdAt = new Date(), updatedAt = new Date(), id = 1) => {
    return new User(email, pass, admin, createdAt, updatedAt, id);
  };

  test('Deve retornar uma instância da class User', () => {
    const user = makeUser('valid_mail@mail.com', '123', 'false', new Date(), new Date());
    expect(user).toBeInstanceOf(User);
  });

  test('Deve retornar erro se informado um email inválido', () => {
    function validate () {
      makeUser('invalid_mail.com');
    }
    expect(validate).toThrow('email inválido');
  });

  test('Deve retornar erro se a senha não for informada', () => {
    function validate () {
      makeUser('valid_mail@mail.com', '');
    }
    expect(validate).toThrow('campo senha não deve ser vazio');
  });

  test('Deve retornar erro se admin não for um valor boleano', () => {
    function validate () {
      makeUser('valid_mail@mail.com', '123', 'invalid_boolean');
    }
    expect(validate).toThrow('campo admin deve ser boolean');
  });

  test('Deve retornar erro se admin não for um valor boleano em formato string', () => {
    function validate () {
      makeUser('valid_mail@mail.com', '123', false);
    }
    expect(validate).toThrow('campo admin deve ser string com valor true ou false');
  });

  test('Deve retornar erro o valor updatedAt não for uma data no formato DD/MM/YYYY hh:mm:ss', () => {
    function validate () {
      makeUser('valid_mail@mail.com', '123', 'false', '00/00/00', new Date());
    }
    expect(validate).toThrow('informe uma data válida');
  });

  test('Deve retornar erro o valor createdAt não for uma data no formato DD/MM/YYYY hh:mm:ss', () => {
    function validate () {
      makeUser('valid_mail@mail.com', '123', 'false', new Date(), '00/00/00');
    }
    expect(validate).toThrow('informe uma data válida');
  });

  test('Deve ser gerado um uuid para cada nova instância da classe usuário', () => {
    const user1 = makeUser('valid_mail@mail.com', '123', 'false', new Date(), new Date(), null);
    const user2 = makeUser('valid_mail@mail.com', '123', 'false', new Date(), new Date(), '');
    const user3 = makeUser('valid_mail@mail.com', '123', 'false', new Date(), new Date(), null);
    const user4 = makeUser('valid_mail@mail.com', '123', 'false', new Date(), new Date(), null);
    console.log(user1);
    expect(user1.id !== user2.id).toBe(true);
    expect(user2.id !== user3.id).toBe(true);
    expect(user3.id !== user4.id).toBe(true);
    expect(user4.id !== user1.id).toBe(true);
  });
});
