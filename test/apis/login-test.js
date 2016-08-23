const request = require('supertest');
const clear = require('../../server/helpers/clear');
const insert = require('../../server/helpers/insert');

describe('Login', () => {
  let server;

  beforeEach(() => {
    insert('userInfo', {userName: 'suibian', password: '123456'});
    server = require('../../server');
  });

  afterEach(() => {
    clear('userInfo');
  });

  it('returns 403 when user name is wrong', (done) => {
    request(server)
      .post('/sessions')
      .send({userName: 'sui', password: '123456'})
      .expect(403, done);
  });

  it('returns 403 when login password is worng', (done) => {
    request(server)
      .post('/sessions')
      .send({userName: 'suibian', password: '123'})
      .expect(403, done);
  });

  it('returns 200 when login successfully', (done) => {
    request(server)
      .post('/sessions')
      .send({userName: 'suibian', password: '123456'})
      .expect(200, done);
  });
});