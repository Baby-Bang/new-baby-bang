"use strict";
const reducer = require('../../public/js/reducers/nav');
const actions = require('../../public/js/actions/nav');
const expect = require('chai').expect;

describe('nav reducer', ()=> {
  it('test nav get user name', ()=> {
    const state = {userName: ''};
    expect(reducer(state, actions.getUserName('test')).userName).to.equal('test');
  });
});