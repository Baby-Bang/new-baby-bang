"use strict";
const reducer = require('../../public/js/reducers/login');
const actions = require('../../public/js/actions/login');
const expect = require('chai').expect;

describe('Login reducer', ()=> {
  it('changes httpCode', ()=> {
    const state = {loginState: ''};
    expect(reducer(state, actions.login(200)).loginState).to.equal(200);
    expect(reducer(state, actions.login(403)).loginState).to.equal(403);
  });
});