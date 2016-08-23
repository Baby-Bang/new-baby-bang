const request = require('supertest');

describe('sessions', () => {
  let server;

  beforeEach(()=>{
    server = require('../../server');
  });

  it('return user logIn', (done) => {
    request(server)
      .get('/sessions/user')
      .expect(200,'"zxw"',done)
  });
});