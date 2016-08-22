const request = require('supertest');
const clear = require('../../server/helpers/clear');
const insert = require('../../server/helpers/insert');

describe('server', () => {
  let server;

  beforeEach(function () {
    insert('hello', {hello: "world"});
    server = require('../../server');
  });

  afterEach(function () {
    clear('hello');
  });

  it('responds to /hello', function(done) {
    request(server)
      .get('/hello')
      .expect(200, '"world"', done);

  });

  it('404 everything else', function(done) {
    request(server)
      .get('/foo/bar')
      .expect(404, done);
  });
});
