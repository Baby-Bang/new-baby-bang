const request = require('supertest');

describe('show diaries', () => {
  let server;

  beforeEach(function () {
    server = require('../../server');
  });

  it('responds to /diaries', function (done) {
    request(server)
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
})
;
