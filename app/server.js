const Hapi = require('hapi');
const Inert = require('inert');
const pkg = require('./package.json');

const server = Hapi.server({ host: 'localhost', port: 9000 });

(async () => {
  await server.register([Inert]);

  server.route([
    {
      method: 'GET',
      path: '/{path*}',
      handler: (request, h) => {
        if (request.params.path && request.params.path.endsWith('main.js')) {
          return h.file('public/main.js');
        }

        return h.file('public/index.html');
      }
    },
    {
      method: 'GET',
      path: '/healthcheck',
      handler: () => ({
        name: pkg.name,
        version: pkg.version
      })
    }
  ]);

  if (!module.parent) {
    await server.start();
  }

  return server;
})();

module.exports = server;
