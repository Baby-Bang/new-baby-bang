"use strict";
const reducer = require('../../public/js/reducers/login');
const actions = require('../../public/js/actions/login');
const expect = require('chai').expect;

describe('Login reducer', ()=> {
  it('changes httpCode', ()=> {
    const state = {httpCode: ''};
    expect(reducer(state, actions.login(200)).httpCode).to.equal(200);
    expect(reducer(state, actions.login(403)).httpCode).to.equal(403);
  });
});