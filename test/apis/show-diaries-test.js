const request = require('supertest');
const clear = require('../../server/helpers/clear');
const insert = require('../../server/helpers/insert');

describe('server', () => {
    let server;

    beforeEach(function () {
        insert('userInfo', {diaries:[{
            id:"",
            data : "2016-02-10",
            age : "0-0-3",
            title : "宝宝今天笑了",
            content : "在今天中午，给宝宝喂饭，它竟然朝我们笑了",
            babyScore : 5,
            parentScore : 4,
            public : true,
            likeNumber : 13
        }]});
        server = require('../../server');
    });

    afterEach(function () {
        clear('userInfo');
    });

    it('responds to diaries', function(done) {
        request(server)
            .get('/showDiaries')
            .expect(200,[{
                id:"",
                data : "2016-02-10",
                age : "0-0-3",
                title : "宝宝今天笑了",
                content : "在今天中午，给宝宝喂饭，它竟然朝我们笑了",
                babyScore : 5,
                parentScore : 4,
                public : true,
                likeNumber : 13
            }], done);
    });
});
