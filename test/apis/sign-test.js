const request = require('supertest');
const clear = require('../../server/helpers/clear');
const insert = require('../../server/helpers/insert');

describe('sign', () => {
    let server;

    beforeEach(() => {
        server = require('../../server');
    });

    afterEach(() => {
        clear('userInfo');
    });


    it('insertUser is right', (done) => {
        request(server)
            .post('/session')
            .send({userName: '123', password: '123',babyBir:'2016-05-14',sex:'male',diaries:[]})
            .expect(200, done);
    });
});
