const request = require('supertest-session');
const insert = require('../../server/helpers/insert');
const clear = require('../../server/helpers/clear');

describe('show diaries', () => {
  let server;
  let testssion = null;

  beforeEach((done) => {
    server = require('../../server');
    insert('userInfo', {
      userName: 'noCare', password: '123456',
      diaries: [{
        date: "2016-02-10",
        babyDays: "0-0-3",
        title: "宝宝今天笑了",
        content: "在今天中午，给宝宝喂饭，它竟然朝我们笑了",
        babyScore: 5,
        parentScore: 4,
        public: true,
        likeNumber: 13
      }, {
        date: "2016-02-15",
        babyDays: "0-0-8",
        title: "给宝宝买了新床",
        content: "在今天中午，我们给宝宝买了一张新床",
        babyScore: 5,
        parentScore: 4,
        public: true,
        likeNumber: 45
      }]
    }, () => {
      "use strict";
      done();
    });
    testssion = request(server);
  });

  afterEach((done) => {
    "use strict";
    clear('userInfo');
    done();
  });

  it('responds to /diaries', function (done) {
    testssion
      .post('/sessions')
      .send({userName: 'noCare', password: '123456'})
      .end(() => {
        "use strict";
        testssion
          .get('/diaries')
          .expect(200, [{
            date: "2016-02-10",
            babyDays: "0-0-3",
            title: "宝宝今天笑了",
            content: "在今天中午，给宝宝喂饭，它竟然朝我们笑了",
            babyScore: 5,
            parentScore: 4,
            public: true,
            likeNumber: 13
          }, {
            date: "2016-02-15",
            babyDays: "0-0-8",
            title: "给宝宝买了新床",
            content: "在今天中午，我们给宝宝买了一张新床",
            babyScore: 5,
            parentScore: 4,
            public: true,
            likeNumber: 45
          }], done);
      });
  });
})
;
