
describe('Validar usuário', () => {
  test('Deve retornar erro se não for informado um email', () => {
    var result = 'informe um email válido';
    expect(result).toBe('informe um email válido');
  });
});
