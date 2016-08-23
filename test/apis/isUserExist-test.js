const request = require('supertest');
const clear = require('../../server/helpers/clear');
const insert = require('../../server/helpers/insert');

describe('isUserExist', ()=> {
    let server;

    beforeEach(() => {
        insert('userInfo', {userName: '123', password: '123', babyBir: '2016-05-14', sex: 'male', diaries: []});
        server = require('../../server');
    });

    afterEach(() => {
        clear('userInfo');
    });

    it('userName is Exist', (done) => {
        request(server)
            .get('/isUserExist')
            .send({userName: '123', password: '123', babyBir: '2016-05-14', sex: 'male', diaries: []})
            .expect(200, 'true', done);
    });

    it('userName is not Exist', (done)=> {
        request(server)
            .get('/isUserExist')
            .send({userName: '900', password: '13', babyBir: '2016-05-14', sex: 'male', diaries: []})
            .expect(200, 'false', done);

    });
});