const express = require('express');
const routes = require('../../interfaces/routes/users.js');
const server = express();
routes.register(server);

server.listen(
  process.env.PORT || 3001, () => console.log(`Server running on ${process.env.HOST}:${process.env.PORT}`)
);
server.app.serviceLocator = require('../../infra/config/service-locator.js');
module.exports = server;
