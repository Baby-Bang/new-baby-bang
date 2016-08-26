const request = require('supertest');
const clear = require('../../server/helpers/clear');
const insert = require('../../server/helpers/insert');

describe('user exist', ()=> {
  let server;

  beforeEach((done) => {
    insert('userInfo', {userName: '123', password: '123', babyBir: '2016-05-14', sex: 'male', diaries: []}, (err) => {
      done();
    });
    server = require('../../server');
  });

  afterEach((done) => {
    clear('userInfo');
    done();
  });

  it('return true when user name is Exist', (done) => {
    request(server)
      .post('/isUserExist')
      .send({userName: '123'})
      .expect(200, 'true').end(done);
  });

  it('return when user name is not Exist', (done)=> {
    request(server)
      .post('/isUserExist')
      .send({userName: '900'})
      .expect(200, 'false', done);
  });
});