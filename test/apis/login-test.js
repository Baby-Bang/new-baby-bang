const request = require('supertest');
const clear = require('../../server/helpers/clear');
const insert = require('../../server/helpers/insert');

describe('login', () => {
  let server;

  beforeEach(() => {
    insert('userInfo', {userName: 'suibian', password: '123456'});
    server = require('../../server');
  });

  afterEach(() => {
    clear('userInfo');
  });

  it('userName is wrong', (done) => {
    request(server)
      .post('/sessions')
      .send({userName: 'sui', password: '123456'})
      .expect(400, done);
  });

  it('password is worng', (done) => {
    request(server)
      .post('/sessions')
      .send({userName: 'suibian', password: '123'})
      .expect(400, done);
  });

  it('userInfo is right', (done) => {
    request(server)
      .post('/sessions')
      .send({userName: 'suibian', password: '123456'})
      .expect(200, done);
  });
});