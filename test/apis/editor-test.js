"use strict";
const request = require('supertest-session');
const clear = require('../../server/helpers/clear');
const insert = require('../../server/helpers/insert');
const server = require('../../server');

describe('Editor',()=> {

  let testSession = null;
  beforeEach((done)=> {
    insert('userInfo', {userName: '123', password: '123',babyBir: '2016-03-01', diaries: []},(err) => {
      done();
    });

    testSession = request(server);
  });

  afterEach((done)=> {
    clear('userInfo');
    done();
  });

  it('return 201 when diary is stored', (done)=> {
    testSession.post('/diary')
      .send({
        date: '2016-3-21',
        babyDays: '23天',
        title: 'baby smile',
        content: 'baby smile baby smile',
        babyScore: 4,
        parentScore: 4,
        public: false,
        likeNumber: 6
      })
    .expect(201, done);
  });
  it('return baby birthday',(done)=>{
    testSession.post('/sessions')
      .send({userName: '123', password: '123'})
      .end(() => {
        testSession.get('/babyBir')
          .expect(200, '"2016-03-01"', done);
      });
  });

});