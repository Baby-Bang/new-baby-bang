const request = require('supertest-session');
const insert = require('../../server/helpers/insert');
const clear = require('../../server/helpers/clear');
const server = require('../../server');

describe('sessions', () => {
  let testSession = null;

  beforeEach((done)=> {
    insert('userInfo', {userName: 'suibian', password: '123456'}, () => {
      done();
    });
    testSession = request(server);
  });

  afterEach((done) => {
    clear('userInfo');
    done();
  });

  it('return user logIn', (done) => {
    testSession.post('/sessions')
      .send({userName: 'suibian', password: '123456'})
      .end(() => {
        testSession.get('/sessions/user')
          .expect(200, '"suibian"', done);
      });
  });
});