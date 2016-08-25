const request = require('supertest');
const clear = require('../../server/helpers/clear');
const insert = require('../../server/helpers/insert');

describe('Login', () => {
  let server;

  beforeEach((done) => {
    insert('userInfo', {userName: 'correct_name', password: 'correct_password'}, () => {
      "use strict";
      done();
    });
    server = require('../../server');
  });

  afterEach((done) => {
    clear('userInfo');
    done();
  });

  it('returns 403 when user name is wrong', (done) => {
    request(server)
      .post('/sessions')
      .send({userName: 'wrong_name', password: 'correct_password'})
      .expect(403, done);
  });

  it('returns 403 when password is wrong', (done) => {
    request(server)
      .post('/sessions')
      .send({userName: 'correct_name', password: 'wrong_password'})
      .expect(403, done);
  });

  it('returns 200 when login successfully', (done) => {
    request(server)
      .post('/sessions')
      .send({userName: 'correct_name', password: 'correct_password'})
      .expect(200, done);
  });
});