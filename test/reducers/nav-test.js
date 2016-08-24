"use strict";
const reducer = require('../../public/js/reducers/nav');
const actions = require('../../public/js/actions/nav');
const expect = require('chai').expect;

describe('Login reducer', ()=> {
  it('changes httpCode', ()=> {
    const state = {userName: ''};
    expect(reducer(state, actions.getUserName('test'))).to.equal('test');
  });
});