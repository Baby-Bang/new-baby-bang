"use strict";
const request = require('supertest');
const clear = require('../../server/helpers/clear');

describe('Editor',()=> {

  let server;
  beforeEach(()=> {
    server = require('../../server');
  });

  afterEach((done)=> {
    clear('userInfo');
    done();
  });

  it('return 201 when diary is stored', (done)=> {
    request(server)
      .post('/diary')
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
});