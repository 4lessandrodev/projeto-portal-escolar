const CreateUser = require('../../app/use_cases/createUser');
module.exports = {
  index: async (request, response) => {
    return response.status(200).json({ result: 'Ok, recebi sua requisição no index' });
  },
  store: async (request, response) => {
    const serviceLocator = request.server.app.serviceLocator;
    const { email, password } = request.body;
    const user = CreateUser(email, password, serviceLocator);
    return response.status(200).json(user);
  },
  update: async (request, response) => {
    return response.status(200).json({ result: 'Ok, recebi sua requisição no update' });
  },
  delete: async (request, response) => {
    return response.status(200).json({ result: 'Ok, recebi sua requisição no delete' });
  }
};
