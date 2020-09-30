module.exports = {
  index: async (request, response) => {
    return response.status(200).json({ result: 'Ok, recebi sua requisição no index' });
  },
  store: async (request, response) => {
    return response.status(200).json({ result: 'Ok, recebi sua requisição no store' });
  },
  update: async (request, response) => {
    return response.status(200).json({ result: 'Ok, recebi sua requisição no update' });
  },
  delete: async (request, response) => {
    return response.status(200).json({ result: 'Ok, recebi sua requisição no delete' });
  }
};
