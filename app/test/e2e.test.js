const { expect } = require('chai');
const server = require('../server');

describe('theServer', () => {
  let response;

  context('when I hit the home route', () => {
    beforeEach(async () => {
      response = await server.inject({
        method: 'GET',
        url: '/healthcheck'
      });
    });

    it('will reply with a valid response', () => {
      expect(response.statusCode).to.equal(200);
    });

    it('will reply with \'Hello\'', () => {
      expect(response.result).to.equal('Hello');
    });
  });
});