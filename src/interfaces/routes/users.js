const controller = require('../controllers/UsersController.js');
module.exports = {
  register: async (server) => {
    server.get('/', controller.index);
    server.post('/', controller.store);
    server.put('/', controller.update);
    server.delete('/', controller.delete);
  }
};
