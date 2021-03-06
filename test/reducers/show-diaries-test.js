"use strict";
const reducer = require('../../public/js/reducers/show-diaries');
const action = require('../../public/js/actions/show-diaries');
const expect = require('chai').expect;

describe('show-diaries reducer', ()=> {
  it('return diaries', ()=> {
    const state = {diaries: []};
    expect(reducer(state, action.showdiaries([]))).to.be.deep.equal({diaries: []});
    expect(reducer(state, action.showdiaries([{
      date: "2016-02-10",
      babyDays: "0-0-3",
      title: "宝宝今天笑了",
      content: "在今天中午，给宝宝喂饭，它竟然朝我们笑了",
      babyScore: 5,
      parentScore: 4,
      public: true,
      likeNumber: 13
    }]))).to.be.deep.equal({
      diaries: [{
        date: "2016-02-10",
        babyDays: "0-0-3",
        title: "宝宝今天笑了",
        content: "在今天中午，给宝宝喂饭，它竟然朝我们笑了",
        babyScore: 5,
        parentScore: 4,
        public: true,
        likeNumber: 13
      }]
    });
  });
});