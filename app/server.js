const Hapi = require('hapi');
const Inert = require('inert');

const server = Hapi.server({ host: 'localhost', port: 9000 });

(async () => {
  await server.register([Inert]);

  server.route([
    {
      method: 'GET',
      path: '/{path*}',
      handler: (request, h) => {
        return h.file('public/index.html');
      }
    },
    {
      method: 'GET',
      path: '/healthcheck',
      handler: (request) => {
        return 'Hello';
      }
    }
  ]);

  if (!module.parent) {
    await server.start();
  }

  return server;
})();

module.exports = server;